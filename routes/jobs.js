import express from 'express';
import Job from '../models/job.js';


const router = express.Router();

// POST a new job
router.post('/post-job', async (req, res) => {
  try {
    const job = new Job(req.body);
    await job.save();
    res.status(201).json({ 
      message: 'Job posted successfully',
      jobId: job._id 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      error: 'Failed to post job',
      details: process.env.NODE_ENV !== 'production' ? error.message : undefined
    });
  }
});

// GET all jobs
router.get('/', async (req, res) => {
  console.log('Fetching jobs...');
  
  try {
    const jobs = await Job.find({})
      .sort({ createdAt: -1 }) // Newest first
      .lean()
      .exec();

    console.log(`Found ${jobs.length} jobs`);
    
    res.status(200).json(jobs);
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({
      error: 'Failed to fetch jobs',
      details: process.env.NODE_ENV !== 'production' ? error.message : undefined
    });
  }
});

// GET a single job by ID
router.get('/:id', async (req, res) => {
  try {
    const job = await Job.findById(req.params.id).lean().exec();
    
    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }
    
    res.status(200).json(job);
  } catch (error) {
    console.error('Error fetching job:', error);
    res.status(500).json({
      error: 'Failed to fetch job',
      details: process.env.NODE_ENV !== 'production' ? error.message : undefined
    });
  }
});

export default router;