class Email:
    def __init__(self):
        self.from_email = ''
        self.to_email = ''
        self.subject = ''
        self.contents = ''
    
    def send_email(self):
        print('From : ' + self.from_email)
        print('To : ' + self.to_email)
        print('Subject : ' + self.subject)
        print('Content: ' + self.contents)


if __name__ == '__main__':
    e = Email()
    e.from_email = "alkdjlf"
    e.send_email = "hfhfh"
    e.subject = "Sdfsdf"
    e.contents = "sldkjfw"
    e.send_email()