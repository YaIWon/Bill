# utils.py

import os
import subprocess
import smtplib
from email.mime.text import MIMEText

from config import Config

# Function to clone and integrate a repository
def clone_and_integrate_repo(repo_url):
    # Clone the repository
    subprocess.run(['git', 'clone', repo_url])

    # Extract the repository name from the URL
    repo_name = os.path.basename(repo_url).replace('.git', '')

    # Move the cloned repository into the AI's directory
    subprocess.run(['mv', repo_name, 'integrations/'])

    # TODO: Add any additional integration logic here

    print(f"Repository {repo_name} cloned and integrated successfully!")

# Function to send notification email
def send_notification_email(message):
    if Config.ENABLE_NOTIFICATIONS:
        msg = MIMEText(message)
        msg['Subject'] = 'AI Notification'
        msg['From'] = Config.NOTIFICATION_EMAIL
        msg['To'] = Config.NOTIFICATION_EMAIL

        with smtplib.SMTP('localhost') as s:
            s.send_message(msg)

# Function to log AI activities
def log_activity(message):
    with open(Config.LOG_FILE, 'a') as log_file:
        log_file.write(message + '\n')

# Entry point of the AI program
def main():
    print(f"{Config.AI_NAME} {Config.AI_VERSION} is running!")

    # TODO: Implement the AI logic

    while True:
        # Prompt the user to enter a repository URL
        repo_url = input("Enter the URL of the repository to clone and integrate (or 'exit' to quit): ")

        # Check if the user wants to exit
        if repo_url == 'exit':
            break

        # Clone and integrate the repository
        clone_and_integrate_repo(repo_url)

        # Send notification email and log the activity
        send_notification_email(f"Repository cloned and integrated: {repo_url}")
        log_activity(f"Repository cloned and integrated: {repo_url}")

if __name__ == "__main__":
    main()