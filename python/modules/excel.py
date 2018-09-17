class Excel:
    def __init__(self):
        self.excel_file = ''
    def save_to_excel(self, data):
        print('Save (' + str(len(data))+')data' + self.excel_file)