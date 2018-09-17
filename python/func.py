# string = "string"
# func = string.count('string')
# print(func)



# def func(param1, param2):
#     prnt = print("hahahoho" + " " + param1)
#     return prnt

# func("noon", "hoho")

# ---------------------------

# def print_filter(string):
#     if 'skip'in string:
#         print('Skip')
#         return
#     print(string)

# user_input = ''
# while user_input != 'quit':
#     user_input = input('iNPUT: ')
#     print_filter(user_input)

# ----------------------------------------------------

# def send_mail(from_email, to_email, title, contents):
#     print("From : " + from_email)
#     print("To : " + to_email)
#     print("Title" + title)
#     print("*"*10)
#     print(contents)
#     print("*"*10)

# my_email = "test_irene@nada.emil"

# users = []
# users.append({'name':'kim','email':'haniy@neamf.com'})
# users.append({'name':'hoho','email':'hohoho@naver.com'})
# users.append({'name':'hana','email':'dianwl!dms.com'})

# contents = '''
# Hello! 
# I'm writing to notice a big news!

# Regards,
# '''

# for user in users:
#     title = 'Dear. ' + user['name']
#     if '@' not in user['email']:
#         continue
#     send_mail(my_email, user['email'], title, contents)

# ----------------------------------------------------

var = '1000'
# print(var + 1)
print(int(var)+1)