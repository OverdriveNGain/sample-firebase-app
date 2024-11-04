# Running Global Chat Locally

To run the global chat locally, you must first install npm dependencies using `npm install`. Then you can run the app using `npm run dev`.

# Activity Checkpoints

You can jump to different checkpoints in the exercise by checking out certain commits with the following tags:

- `messages-service-start` - Starting point of the messages service implementation
- `account-service-start` - Implementation for messages services done; starting point of the account service implementation
- `project-done` - Implementation for account service done; completed project

You can check the full timeline of commits of the project by running `git log --oneline`.

# Commands

- `git checkout messages-service-start` - Checkout the starting point of the messages service implementation
- `git checkout account-service-start` - Checkout the starting point of the account service implementation
- `git checkout project-done` - Checkout the completed project
- `git checkout main` - Checkout the completed project
- `git reset --hard; git checkout messages-service-start` - Force checkout the project to the starting point of the messages service implementation
- `git reset --hard; git checkout account-service-start` - Force checkout the project to the starting point of the account service implementation
- `git reset --hard; git checkout project-done` - Force checkout the project to the completed project

Make sure to create a new branch if you plan to keep your own work in progress!