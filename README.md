home page:
account
active pipes
saved pipes
some company details

saved pipeline exporer:
table directory

pipeline view:
git repo pointing too, or build platform
pipeline config: build from template, click node to view logs, modify pipeline settings, gear icon at start shows a list of env configs
arrange nodes in flow to establish build order
previous runs page
error logging breakdown

build a pipeline template:
pipeline config file: env stuff, vars, cli's and cli permissions
pipeline node assembly, add a node and write some groovy in it
should have some kind of git flow

account page:
user info
basic permissions structure, most likely dependant on cloud platofrm

2 clusters 1 databse

cluster 1 is the ui, cluster 2 is the cmd server

ui makes request to ui server to initiate pipeline, ui cluster calls cmd cluster with config to run, cmd cluster intiates and begins populating mongo with details, and the ui server then opens a watch steam from mongo, which is sent back to the client. in the case it is already running we just open the listining stream. 


