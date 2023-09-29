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

runs on k8, pod spins up sepreate thread running the pipeline and commits logs to mongo, scaled by metric server or cpu%,

on load the ui hits an endpoint called status for a particular folder or pipeline. a pod returns a manifest of any acitve pipelines with the pod its runing ons address.
the UI can then make a direct http call to the pod the pipeline is running on, which returns an initial dump of all the previous logs and the node state data, however leaves the response open streaming the new logs and node info as well. This will be an object stream with some indciator to tell the ui what to do with it. 


