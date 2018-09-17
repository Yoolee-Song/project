class News:
    def __init__(self):
        self.news = []
    
    def find_news(self, keyword):
        for i in range(10):
            self.news.append('\''+ str(i) + 'news: ' + keyword+'\'')
        print('collected')
        return self.news