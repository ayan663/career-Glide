import express from 'express';
import Application from '../models/application.js';
import Job from '../models/job.js';
import multer from 'multer';

const upload = multer({ dest: 'uploads/' });

const router = express.Router();

// POST a new application
router.post('/', upload.single('resume'), async (req, res) => {
  try {
    // Verify the job exists
    const job = await Job.findById(req.body.jobId);
    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }

    const application = new Application({
      jobId: req.body.jobId,
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      coverLetter: req.body.coverLetter,
      resumePath: req.file.path
    });

    await application.save();
    
    res.status(201).json({ 
      message: 'Application submitted successfully',
      applicationId: application._id
    });
  } catch (error) {
    console.error('Application error:', error);
    res.status(500).json({ 
      error: 'Error submitting application',
      details: process.env.NODE_ENV !== 'production' ? error.message : undefined
    });
  }
});

// GET applications for a specific job (for recruiters)
router.get('/job/:jobId', async (req, res) => {
  try {
    const applications = await Application.find({ jobId: req.params.jobId })
      .sort({ appliedAt: -1 })
      .lean()
      .exec();

    res.status(200).json(applications);
  } catch (error) {
    console.error('Error fetching applications:', error);
    res.status(500).json({ 
      error: 'Failed to fetch applications',
      details: process.env.NODE_ENV !== 'production' ? error.message : undefined
    });
  }
});




export default router;