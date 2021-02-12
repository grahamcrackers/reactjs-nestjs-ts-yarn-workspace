# Slerk: A slack clone for learning (UI)

This is a knockoff of slack and other various chat applications that is built entirely in javascript. This is a learning project only and I'm mainly using it to learn more about real-time messaging and web sockets.

## Milestones

[ ] - Basic Web UI components and application
[ ] - Top Bar: Search and User Profile/Dropdown
[ ] - Left Side Bar: Team Profile/Dropdown, Threads, Mentions and Reactions, Channels List, Direct Messages List, Apps List
[ ] - Main Page: Header, Messages Pane, Footer (Input)
[ ] - Right Side Bar: Dynamic Options/Details

### Why no CRA

`create-react-app` is great, but I've grown tired of staying on old version of tools and waiting for CRA to catch up as well as trying to shoehorn in injections with `craco` and other various tools just to get something to work when webpack in more than capable of handling a react project. Also, future proofing for when I want to move this into a monorepo, but for right now, keeping it a seperate project is more than enough to get this app off the ground.
