import json
import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Отправка заявок с формы обратной связи на email
    Args: event - запрос с данными формы (name, phone, car, message)
          context - контекст выполнения функции
    Returns: HTTP ответ с результатом отправки
    '''
    method: str = event.get('httpMethod', 'POST')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    body_data = json.loads(event.get('body', '{}'))
    
    name: str = body_data.get('name', '')
    phone: str = body_data.get('phone', '')
    car: str = body_data.get('car', '')
    message: str = body_data.get('message', '')
    
    smtp_password = os.environ.get('SMTP_PASSWORD', '')
    
    if not smtp_password:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'SMTP не настроен'}),
            'isBase64Encoded': False
        }
    
    msg = MIMEMultipart()
    msg['From'] = 'padin.boss@mail.ru'
    msg['To'] = 'padin.boss@mail.ru'
    msg['Subject'] = f'Новая заявка от {name}'
    
    email_body = f"""
    Новая заявка на бронирование автомобиля
    
    Имя: {name}
    Телефон: {phone}
    Интересующий автомобиль: {car}
    Сообщение: {message}
    """
    
    msg.attach(MIMEText(email_body, 'plain', 'utf-8'))
    
    server = smtplib.SMTP_SSL('smtp.mail.ru', 465)
    server.login('padin.boss@mail.ru', smtp_password)
    server.send_message(msg)
    server.quit()
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({'success': True, 'message': 'Заявка отправлена'}),
        'isBase64Encoded': False
    }
