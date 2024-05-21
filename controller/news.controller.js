const News = require('../model/news.model');

exports.createNews = async (req, res) => {
  try {
    const { id, title, content, url } = req.body;
    const news = new News({ id, title, content, url });
    await news.save();
    res.status(201).json(news);
  } catch (err) {
    console.error('Error creating news:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getNews = async (req, res) => {
  try {
    const news = await News.find();
    res.status(200).json(news);
  } catch (err) {
    console.error('Error fetching news:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateNews = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, url } = req.body;
    const news = await News.findByIdAndUpdate(id, { title, content, url }, { new: true });
    if (!news) {
      return res.status(404).json({ message: 'News not found' });
    }
    res.status(200).json(news);
  } catch (err) {
    console.error('Error updating news:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteNews = async (req, res) => {
  try {
    const { id } = req.params;
    const news = await News.findByIdAndDelete(id);
    if (!news) {
      return res.status(404).json({ message: 'News not found' });
    }
    res.status(200).json({ message: 'News deleted successfully' });
  } catch (err) {
    console.error('Error deleting news:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
