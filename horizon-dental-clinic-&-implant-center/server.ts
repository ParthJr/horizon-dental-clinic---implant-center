import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json());

  // API Endpoint for Appointment Submissions
  app.post('/api/appointment', (req, res) => {
    try {
      const { fullName, mobileNumber, serviceInterest, preferredDate, preferredTime, patientMessage, privacyConsent } = req.body;

      if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
        return res.status(400).json({
          success: false,
          error: 'Please enter a valid full name.'
        });
      }

      const cleanedPhone = String(mobileNumber || '').replace(/\D/g, '');
      const mobileRegex = /^[6-9]\d{9}$/;
      if (!mobileRegex.test(cleanedPhone)) {
        return res.status(400).json({
          success: false,
          error: 'Please enter a valid 10-digit Indian mobile number (e.g. 9876543210).'
        });
      }

      if (!privacyConsent) {
        return res.status(400).json({
          success: false,
          error: 'Privacy consent is required to submit a consultation request.'
        });
      }

      // Check for past dates
      if (preferredDate) {
        const selected = new Date(preferredDate);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (selected < today) {
          return res.status(400).json({
            success: false,
            error: 'Preferred appointment date cannot be in the past.'
          });
        }
      }

      const referenceId = `HZN-${Math.floor(100000 + Math.random() * 900000)}`;

      console.log(`[APPOINTMENT_REQUEST] Ref: ${referenceId} | Name: ${fullName} | Phone: ${cleanedPhone} | Service: ${serviceInterest}`);

      return res.status(200).json({
        success: true,
        referenceId,
        message: 'Enquiry received successfully! The Horizon Dental clinic coordinator will call you to confirm your slot.',
        details: {
          fullName,
          mobileNumber: cleanedPhone,
          serviceInterest: serviceInterest || 'General Dentistry',
          preferredDate: preferredDate || 'Earliest Slot',
          preferredTime: preferredTime || 'Morning Window'
        }
      });
    } catch (err) {
      console.error('Error processing appointment request:', err);
      return res.status(500).json({
        success: false,
        error: 'An internal error occurred while processing your request. Please call 079906 06667 directly.'
      });
    }
  });

  // Mount Vite development middleware or serve built static files
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(process.cwd(), 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(process.cwd(), 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
