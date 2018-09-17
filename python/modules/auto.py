from email import Email 
from excel import Excel 
from news import News 

m_email = Email()
m_excel = Excel()
m_news = News()

news_list = m_news.find_news('키워드!')

m_email.from_email = 'al'
m_email.to_email = 'dkjs'
m_email.subject = 'Dear. '

for news in news_list:
    m_email.contents = m_email.contents + news + '\n'

m_email.send_email()

m_excel.excel_file = 'result.xlsx'
m_excel.save_to_excel(news_list)