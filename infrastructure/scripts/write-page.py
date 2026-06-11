import os

content = open('/dev/stdin').read()
os.makedirs('src/app', exist_ok=True)
with open('src/app/page.tsx', 'w') as f:
    f.write(content)
print('Done')
