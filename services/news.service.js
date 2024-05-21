const News = require('../model/news.model');

class NewsService {
  static async createNews(id, title, content, url) {
    try {
      const news = new News({ id, title, content, url });
      await news.save();
      return news;
    } catch (error) {
      throw new Error('Error creating news: ' + error.message);
    }
  }

  static async getNews() {
    try {
      const news = await News.find();
      return news;
    } catch (error) {
      throw new Error('Error fetching news: ' + error.message);
    }
  }

  static async updateNews(id, title, content, url) {
    try {
      const news = await News.findByIdAndUpdate(id, { title, content, url }, { new: true });
      if (!news) {
        throw new Error('News not found');
      }
      return news;
    } catch (error) {
      throw new Error('Error updating news: ' + error.message);
    }
  }

  static async deleteNews(id) {
    try {
      const news = await News.findByIdAndDelete(id);
      if (!news) {
        throw new Error('News not found');
      }
      return { message: 'News deleted successfully' };
    } catch (error) {
      throw new Error('Error deleting news: ' + error.message);
    }
  }
}

module.exports = NewsService;
