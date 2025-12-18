<!--

@onload
window.sendData = async function sendData({url='https://script.google.com/macros/s/AKfycbwP4LGNJU7o439IZ-qP-gsPiMcmVgDXENW6X8w_bl2BSxUpw7R7Zjg_rOibLcJnrFrDaQ/exec', username, email, course, question, value}) {

  //Only transmit data if a valid email has been given
  if(email.endsWith(".edu") || email.endsWith(".gov")){
    // We inject the captured selection into your JSON
    const payload = `{
        "username" : "${username}",
        "email" : "${email}", 
        "course" : "${course}",
        "question" : "${question}",
        "value" : "${value}"
    }`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: payload,
        });
        
        // Note: With 'no-cors', we cannot read response.text(), but the request sends.
        console.log("Request sent successfully to Google Sheets");
        send.lia("true")
        return "Submission Successful"; 
    } catch (error) {
        console.error("Error:", error);
        alert(error)
        send.lia("Update Failed", [], false)
        return "Error sending data";
    }
  }
  else{
    console.log("Invalid Email")
  }
}

window.user_name="anon_" + Math.floor(Math.random() * 1000000);
window.user_email=window.user_name + "email.edu"

@end


persistent: true
-->

# Research Computing New User Training

Welcome to the Research Computing New User Training! This course covers the ins and outs of CU Research Computing's (CURC) High Performance Computing (HPC) systems. 

<div style="width:45%; margin: 15px 2.5%; float:left;">

![A student is taking an online quiz to test their knowledge of HPC systems](lia_test/img/RC_Quiz.png)<!-- style="border:solid black 1px; border-radius: 15px;" -->

</div>

<div style="width:40%; border: solid black 1px; padding:10px; border-radius: 15px; float:left; margin: 15px 2.5%;" >

**Please enter your Research Computing account information: **

Do you have an existing RC account? 

<script input="radio" value="Select Yes or No" options="YES|NO">
  //If yes, reveal the username option
  if("@input" === "YES"){
    document.getElementById("username").hidden = false;
    "YES"
  }
  else if ("@input" === "NO"){
    document.getElementById("username").hidden = true;
    "NO"
  }
  else{
    "Select Yes or No"
  }
 
</script>

<div id="username" hidden>

Research Computing username: 

<script input="text" placeholder="buff1234" >
  let user_name_temp = "@input"
  if(user_name_temp){
    user_name = user_name_temp
    user_name_temp
  }
  else{
    "Enter username"
  }

</script>
</div>

Institutional email address: 

<script input="email" placeholder="e.g. Ralphie@colorado.edu" >
  let user_email_temp = "@input"

  if(user_email_temp){
    if(user_email_temp.endsWith(".edu") || user_email_temp.endsWith(".gov")){
      user_email = user_email_temp
    }
    else{
      document.getElementById("email_warning").innerHTML="WARNING - Please enter an institutional email (.edu) or government email (.gov)"
    }
    user_email_temp
  }
  else{
    "Enter institutional email"
  }

</script>

<div id="email_warning" style="color:red">

</div>

<br>



<script input="submit" default="Submit" style="display:block; text-align:center;"  >
  if(user_email.endsWith(".edu") || user_email.endsWith(".gov")){
    let currentDate = new Date();
    sendData({username: user_name, email: user_email, course:"NEW_USER", question:"START", value: currentDate.toLocaleString()})
    "Information Saved"
  }
  else{
    "Please enter a valid institutional email"
  }
</script>


</div>

<div style="clear:both"></div>

> **Note:** Multiple questions are embedded in this training. It is ok if you don't know the answer to every question! Many of the questions are designed to test for common misconceptions and help you avoid common pitfalls for new users. 


---

## What is an HPC Cluster?

An HPC cluster connects individual computers (called "nodes") via a high-speed network, allowing them to function as a single, unified supercomputer. This design enables you to tackle even the toughest research problems by breaking them up into smaller pieces (which can be solved in parallel) or processed at scale (high-throughput computing).

* **Working in Parallel:** Like a team solving different sections of one giant puzzle simultaneously, the nodes work together (i.e. in parallel) on a single complex task. This accelerates heavy workloads, such as training AI models or running climate simulations, and significantly reduces processing time.

* **Working at Scale:** Also known as "High-Throughput Computing," this approach assigns each node a separate, smaller puzzle to solve independently. While the speed of a single task remains the same, the cluster processes a massive volume of distinct jobs at once.


![A cartoon graphic of an HPC Cluster's hardware](lia_test/img/HPC_Workflows.png)<!-- style="border:solid black 1px; border-radius: 15px; display:block; margin:15px auto; width:75%" -->



---

### CURC Supported Clusters

CURC currently supports two clusters -- Alpine and Blanca. 

**Alpine** is the University of Colorado Boulder Research Computing’s third-generation high performance computing (HPC) cluster composed of hardware provided from University of Colorado Boulder, Colorado State University, and Anschutz Medical Campus. Alpine currently offers hundreds of compute nodes with thousands of CPU cores and dozens of GPUs. All Alpine nodes are available to all RC users. 

**Blanca** is a shared “condo” compute cluster, which consists of nodes owned by individual research groups or departments. Condo partners get significantly prioritized access on nodes that they own and can run jobs on any nodes that are not currently in use by other partners. If you would like to purchase a Blanca node, please visit the Research Computing website for more details. 

<div style="display: flex; align-items:center; padding:1em; border-top: dashed 1px; border-bottom: dashed 1px; " >

<img alt="Read the Docs Logo" src="lia_test/img/RTD_Logo_Dark.svg" style="width:150px; margin-right:15px; background-color:white; border-radius:5px; padding:5px;"> 

<p style="margin-bottom:0;" >Learn more about [Alpine](https://curc.readthedocs.io/en/latest/clusters/alpine/index.html) and [Blanca](https://www.colorado.edu/rc/resources/blanca) in our online documentation. </p>

</div>

#### ✏ Knowledge Check

<div style="width:45%; margin: 15px 2.5%; float:left; ">

![A cartoon graphic of an HPC Cluster's hardware](lia_test/img/HPC_Clusters.png)<!-- style="border:solid black 1px; border-radius: 15px;" -->

</div>

<div style="width:40%; border: solid black 1px; padding:10px; border-radius: 15px; float:left; margin: 15px 2.5%;" >

Which of the following research tasks are suitable for an HPC cluster, like Alpine or Blanca? (Select all that apply)

<!-- data-solution-button="off" -->
[[X]] Training a deep learning neural network model using a large dataset (Gigabytes to Terabytes) 
[[ ]] Creating a spreadsheet to calculate the average weight and height of 30 penguins 
[[X]] Running a computational fluid dynamics (CFD) simulation of airflow over an airplane's wing 
[[ ]] Hosting an interactive website for visualizing historical weather data 
<script>
//Expected format for @input is a numeric array
// [0,0,0,1] 
let response = ""
let check = 0

//  Neutral Net
if (@input[0] == "1") {
  response += "<b>Training a deep learning... - Correct!</b> <br> Training a deep learning neural network requires a massive amount of simultaneous computations and a lots of memory capacity to handle the model and dataset, making it a classic HPC workflow. <br> <br>"
  check+=1
} 

//Spreadsheet 
if (@input[1]  == "1") {
  response += "<b> Creating a spreadsheet... - Not Quite.</b>  <br> This task is a simple, sequential calculation that requires minimal resources and is easily handled by a standard personal computer. It does not benefit from or require the parallel power of a cluster. <br> <br>"
} 

// CFD Simulation
if (@input[2] == "1") {
  response += "<b> Running a computational fluid ... - Correct!</b> <br> Simulations often require coordinated, parallel computation across many CPU cores (and GPUs) in order to complete within a reasonable timeframe. <br> <br>"
  check+=1
} 

// Hosting a website
if (@input[3] == "1") {
  response += "<b> Hosting an interactive website... - Not Quite.</b> <br> While visualizing large datasets can be a great HPC workflow, CURC does not support web servers. Research workflows that require always-on services (like web servers) need to be setup in the cloud or on a non-CURC cluster.  <br> <br>"
} 

document.getElementById("hpc_question_responses").innerHTML = response

if(check == 2){
  let currentDate = new Date();
  sendData({username: user_name, email: user_email, course:"NEW_USER", question:"HPC_CLUSTERS", value: currentDate.toLocaleString()})
  send.lia("true")
} else { send.lia("")}

//Note - the wait line is required for lia to properly use the send option to the quiz

"LIA: wait"
</script>

<div id="hpc_question_responses"></div>

</div>

<div style="clear:both"></div>



---

### Cluster Hardware

CURC supports three types of nodes in its clusters: Login, Compute, and Data-Transfer.

---

#### Login Nodes

This is your entry point to the system. When you SSH into login.rc.colorado.edu, you are on a login node.

* **Use it for:** Lightweight tasks like editing files, writing job scripts, managing directories, and submitting jobs to the scheduler.

* **Do NOT use it for:** Running computational programs or compiling code. These nodes are shared by everyone, and running heavy tasks here slows down the system for all users!

---

#### Compute Nodes 

These are the powerful computers where your actual research and calculations take place.

* **Use it for:** Running simulations, analyzing data, and performing heavy calculations.  
* **Types Available:**

  * *CPU Nodes:* Primary node for most users. Includes at least 256 GB of RAM[^1](Random Access Memory [RAM] serves as temporary storage for your active programs and data. Insufficient RAM allocation can lead to performance degradation or abrupt program termination via Out of Memory [OOM] errors. However, it is critical to estimate your usage accurately and request only the resources necessary to avoid waste.) and dozens of CPU cores[^2](The Central Processing Unit [CPU] acts as the 'brain' of the computer, executing calculations. While modern CPUs offer multiple cores to allow tasks to run simultaneously, [parallel processing], this only works if your software is designed to split the work. Crucial Note: Simply requesting more cores does not automatically make your job run faster. If your program is 'single-threaded,' it will use one core while the others sit idle.) per node.
  * *High-Memory Nodes:* Specialized CPU Node that provides a large amount of RAM (1TB or 2 TB).
  * *GPU Nodes:* Specialized nodes that contains one or more Graphical Processing Units (GPUs), which help support AI, Machine Learning, and GPU-accelerated software.

* **How to access:** You generally do not log into these directly. Instead, you submit a "job" (using Slurm) from the login node, and the system assigns your work to a compute node automatically. You'll learn more in an upcoming section "Running Jobs on the Cluster". 

#### ✏ Knowledge Check

<div style="width:45%; margin: 15px 2.5%; float:left;">

![A cartoon graphic of an HPC Cluster's hardware](lia_test/img/Alpine.png)<!-- style="border:solid black 1px; border-radius: 15px;" -->

</div>

<div style="width:40%; border: solid black 1px; padding:10px; border-radius: 15px; float:left; margin: 15px 2.5%;" >

**Scenario:** A research team needs to run an intensive data analysis application that will need dozens of CPUs and enough memory to load a large dataset (~150 GB corpus of Latin Texts) into memory.

Based on the info above, which compute node type is most appropriate?

<!-- data-solution-button="off" -->
[(X)] CPU Nodes
[( )] High-Memory Nodes
[( )] GPU Nodes
[( )] None - Not an appropriate HPC workflow
<script>
//Expected format for @input is a numeric array
// 0, 1, 2, 3 <- a single choice will return the entry id, not an array
let response = ""
let check = 0

//  CPU Nodes
if ("@input" == "0") {
  response = "<b> CPU Nodes - Correct!</b> <br> While a 150 GB dataset is large for a local computer, it will fit just fine on a CPU node's memory. While a High-Memory Node might work, those nodes should only be used for jobs that require more memory than a CPU node can provide (>250GB). <br>"
  check=1
} 

// High-Memory Nodes 
if ("@input" == "1") {
  response = "<b> High-Memory Nodes - Close!</b> <br> But a CPU Node would be a better fit. While a 150 GB dataset is large for a local computer, it will fit just fine on a CPU node's memory. <br>"
} 

// GPU Node
if ("@input" == "2") {
  response = "<b> GPU Nodes - Not Quite </b> <br> A CPU Node would be a better fit. Since the workflow doesn't mention needing GPUs for data processing, it would be best to stick with a CPU node. <br>"
} 

// None
if ("@input" == "3") {
  response = "<b> None - Not an appropriate HPC workflow - Not Quite</b> <br> As described, the researchers workflow would be a great fit for an HPC Cluster. While there may be additional requirements that might make Alpine unsuitable (e.g. needing to run jobs for longer than 7 days), the workflow itself is a great example of an HPC empowered workflow <br>"
} 

document.getElementById("node_question_responses").innerHTML = response

//If all of the correct options have been selected, then send true so LIA will continue. Sending empty string (false) notifies lia that 
// the submission isn't fully complete
if(check == 1){
  let currentDate = new Date();
  sendData({username: user_name, email: user_email, course:"NEW_USER", question:"ALPINE_HARDWARE", value: currentDate.toLocaleString()})
  send.lia("true")
} else { send.lia("")}

//Note - the wait line is required for lia to properly use the send option to the quiz

"LIA: wait"
</script>

<div id="node_question_responses"></div>

</div>

<div style="clear:both"></div>

---

#### Data-Transfer Nodes 

These are specialized nodes optimized for moving files in and out of the system.

* **Use it for:** Uploading or downloading large datasets between your computer (or another institution) and CURC storage.

* **How to access:** You connect to these via Globus, `sftp`, `scp`, or `ssh` on dtn.rc.colorado.edu. You will learn more about these data transfer techniques in an upcoming section "Storing Data on the Cluster". 

 
---

## Accessing the Cluster

To access CURC's HPC resources, like Alpine and Blanca, you will need to follow these three steps: 

1. Request a Research Computing account

2. Log into the system (ssh or Open OnDemand's Web Portal) 

3. Submit a job or transfer data

<br>

![A cartoon graphic showing how to access CURC systems](lia_test/img/System_Access.png)<!-- style="border:solid black 1px; border-radius: 15px; width:75%; margin: 0 auto; display:block;" -->

### Requesting an RC Account 

In order to access CURC's High Performance Computing (HPC) systems (Alpine, Blanca), Open OnDemand, and storage solutions, you must have an active CURC account. CURC serves multiple institutions, including CU Boulder, AMC, CSU, and RMACC members. Since account creation methods vary by affiliation, please review our [documentation page](https://curc.readthedocs.io/en/latest/getting_started/logging-in.html#getting-a-curc-account) to find the specific instructions for your institution.

<br> 

<div style="display: flex; align-items:center; padding:1em; border-top: dashed 1px; border-bottom: dashed 1px; " >

<img alt="Read the Docs Logo" src="lia_test/img/RTD_Logo_Dark.svg" style="width:150px; margin-right:15px; background-color:white; border-radius:5px; padding:5px;"> 

<p style="margin-bottom:0;" >Learn more about [requesting an RC account](https://curc.readthedocs.io/en/latest/getting_started/logging-in.html#getting-a-curc-account) in our online documentation. </p>

</div>

### Logging In 

Similar to obtaining an account, the process of logging in to CURC resources can vary based on the institution you are affiliated with. You can find institution-specific details for accessing the login nodes below and in our [online documentation](https://curc.readthedocs.io/en/latest/getting_started/logging-in.html#getting-access-to-curc-resources). 

**Important note:** Only certain institutions are able to access the login nodes via `ssh`. `ssh` access is currently limited to users affiliated with CU Boulder, Colorado State University, and CU Anschutz.

<br> 

<div style="display: flex; align-items:center; padding:1em; border-top: dashed 1px; border-bottom: dashed 1px; " >

<img alt="Read the Docs Logo" src="lia_test/img/RTD_Logo_Dark.svg" style="width:150px; margin-right:15px; background-color:white; border-radius:5px; padding:5px;"> 

<p style="margin-bottom:0;" >Learn more about [logging in](https://curc.readthedocs.io/en/latest/getting_started/logging-in.html#getting-access-to-curc-resources) in our online documentation. </p>

</div>

---

### Open OnDemand

Open OnDemand is a browser-based web portal that serves as a single access point for CURC resources and includes the following key features:

* **File Browser:** Upload, download, and edit files smaller than 1 GB.
* **Interactive Apps:** Launch Jupyter Notebooks, RStudio, VS Code, Core Desktop, and MATLAB in your browser using HPC resources.
* **Job Composer:** Submit and monitor jobs on the cluster.
* **Shell Access:** Open a terminal window directly in your browser.

<div style="display: flex; align-items:center; padding:1em; border-top: dashed 1px; border-bottom: dashed 1px; " >

<img alt="Read the Docs Logo" src="lia_test/img/RTD_Logo_Dark.svg" style="width:150px; margin-right:15px; background-color:white; border-radius:5px; padding:5px;"> 

<p style="margin-bottom:0;" >Learn more about [Open OnDemand](https://curc.readthedocs.io/en/latest/open_ondemand/index.html) in our online documentation. </p>

</div>

#### ✏ Knowledge Check

<div style="width:45%; margin: 15px 2.5%; float:left;">

![A cartoon graphic of a user interacting with the Open OnDemand web portal](lia_test/img/Open_OnDemand.png)<!-- style="border:solid black 1px; border-radius: 15px;" -->

</div>

<div style="width:40%; border: solid black 1px; padding:10px; border-radius: 15px; float:left; margin: 15px 2.5%;" >

**1. In order to access command-line operations or edit your files on CURC's clusters, you must setup a local terminal application on your computer, like Putty or iTerm.**

<!-- 
data-solution-button="off" 
data-text-solved="Correct! <br> Open OnDemand provides an interactive shell (Alpine Shell) which can be used instead of local terminal applications. This is a great way to access the system's Linux terminal without the hassle of setting up Putty or other terminal applications."
data-text-failed="Not Quite! <br>Open OnDemand's Alpine Shell provides all RC users a web-based terminal for running Linux commands, editing files, other command-line operations. "
-->
[( )] Yes
[(X)] No
<script>

if ("@input" == "1") {
  let currentDate = new Date();
  sendData({username: user_name, email: user_email, course:"NEW_USER", question:"ONDEMAND_1", value: currentDate.toLocaleString()})
  send.lia("true")
} else { send.lia("")}

  "LIA: wait"
</script>


**2. Can you use Open OnDemand to upload/download your large research dataset?**

<!-- 
data-solution-button="off" 
data-text-solved="Correct! <br> Open OnDemand is only intended for light data operations - like working with text files. You can learn more about how data transfers in our <a href='https://curc.readthedocs.io/en/latest/compute/data-transfer.html'>online documentation</a>. <br>"
data-text-failed="Not Quite! <br> While Open OnDemand provides a file browser, it is only intended for light data operations - like working with text files. If you need to upload or download a large dataset, you'll need to use one of our data transfer tools (like Globus). You can learn more about how data transfers in our <a href='https://curc.readthedocs.io/en/latest/compute/data-transfer.html'>online documentation</a>.<br>"
-->
[( )] Yes
[(X)] No
<script>

if ("@input" == "1") {
  let currentDate = new Date();
  sendData({username: user_name, email: user_email, course:"NEW_USER", question:"ONDEMAND_2", value: currentDate.toLocaleString()})
  send.lia("true")
} else { send.lia("")}

  "LIA: wait"
</script>



</div>

<div style="clear:both"></div>

---

## Running Jobs on the Cluster

Because CURC's compute nodes are shared among many researchers, Research Computing manages system usage through jobs. Jobs are simply an allotment of resources that can be used to execute processes. Research Computing uses a program named the Simple Linux Utility for Resource Management, or Slurm, to create and manage jobs.

In order to run a program on a cluster, you must request resources from Slurm to generate a job. Resources can be requested from a login node or a compile node. You must then provide commands to run your program on those requested resources. Where you provide your commands depends on whether you are running a batch job or an interactive job.

If you are new to CURC's systems we encourage you to start with an interactive job, where you can develop and test your computational workflow. Once you are ready to scale-up your workflow, you can convert your workflow into a batch job that is managed by SLURM. More details on interactive and batch jobs follow in the next sections. 

> **Note:** Whether you run a batch job or an interactive job, it will be placed in a queue until resources are available. As a good rule of thumb, the more resources and job time you request the longer your job will wait in the queue. So, make sure your jobs only request what they need.

![A cartoon graphic showing the types of interactive and batch jobs supported on the cluster](lia_test/img/Interactive_VS_Batch_Jobs.png)<!-- style="border:solid black 1px; border-radius: 15px; width:75%; margin: 0 auto; display:block;" -->

### Interactive Jobs

As the name would imply, an interactive job is a job that allows users to interact with requested resources in real-time. Users can run applications, execute scripts, or run other commands directly on a compute node. Interactive jobs should be used for:

* Debugging applications or workflows
* Any application that requires user input at runtime
* Any application with a GUI (Graphical User Interface)

---

**`sinteractive`** <br>
You can request an interactive job by using the sinteractive command. Compute resources must be requested via the command line through the use of SLURM flags (more details provided in our online documentation linked below). Examples of sinteractive commands can be found in the next section. 

---

**`Open OnDemand`** <br>
You can also request an interactive job through Open Ondemand, which supports a variety of Integrated Development Environments (IDE) and GUI applications. The following applications are currently supported in Open OnDemand: 

* **Core Desktop** - A Linux Desktop environment to support GUI applications 
* **VS Code Server**
* **Jupyter Lab / Jupyter Notebook** 
* **MATLAB**
* **RStudio**

<div style="display: flex; align-items:center; padding:1em; border-top: dashed 1px; border-bottom: dashed 1px; " >

<img alt="Read the Docs Logo" src="lia_test/img/RTD_Logo_Dark.svg" style="width:150px; margin-right:15px; background-color:white; border-radius:5px; padding:5px;"> 

<p style="margin-bottom:0;" >Learn more about [interactive jobs](https://curc.readthedocs.io/en/latest/running-jobs/interactive-jobs.html) and [Open OnDemand's interactive applications](https://curc.readthedocs.io/en/latest/open_ondemand/index.html) in our online documentation. </p>

</div>

#### sinteractive Examples 

Below are examples of how you can use sinteractive to request specific compute resources on Alpine's different partitions. These are only intended as quick examples. To learn more about the different partitions and compute resources on Alpine and Blanca, check the online documentation linked below. 

---

Request 4 CPU cores (ntasks) for 30 minutes on acompile. acompile is a "partition" that provides quick access to compute nodes for compiling code and other small compute tasks.

```
sinteractive --partition=acompile --ntasks=4 --nodes=1 --qos=compile --time=00:10:00
```

---

Request 8 cpu cores (ntask) for 2 hours on the amilan partition. amilan is the main partition for CPU nodes and where most of your jobs will be submitted.

```
sinteractive --partition=amilan --time=02:00:00 --ntasks=8 --nodes=1 --qos=normal
```

---

Request 4 CPU cores spread evenly across 2 nodes for 10 minutes on the atesting partition. atesting is one of the testing partitions, which provides access to limited resources for the purpose of verifying workflows and MPI jobs.

```
sinteractive --partition=atesting --ntasks=2 --ntasks-per-node=1 --nodes=2 --qos=testing --time=00:10:00
```

---

Request 1 A100 GPU (MIG Slice) with 10 CPU cores for 30 minutes on the atesting_a100 partition. atesting_a100 is one of the GPU testing partitions which provide access to limited GPU resources for the purpose of verifying GPU workflows and building GPU-accelerated applications.

```
sinteractive --partition=atesting_a100 --gres=gpu:1 --ntasks=10 --nodes=1 --qos=testing --time=00:30:00 
```


<div style="display: flex; align-items:center; padding:1em; border-top: dashed 1px; border-bottom: dashed 1px; " >

<img alt="Read the Docs Logo" src="lia_test/img/RTD_Logo_Dark.svg" style="width:150px; margin-right:15px; background-color:white; border-radius:5px; padding:5px;"> 

<p style="margin-bottom:0;" >Learn more about [Alpine's partitions](https://curc.readthedocs.io/en/latest/clusters/alpine/alpine-hardware.html#partitions) and check examples for requesting [Blanca resources](https://curc.readthedocs.io/en/latest/clusters/blanca/blanca.html#examples) in our online documentation. </p>

</div>

### Batch Jobs

The primary method of running applications on Research Computing resources is through a batch job. A batch job is a job that runs on a compute node with little or no interaction with the users. You should use batch jobs for:

* Any computationally expensive application that could take hours or days to run
* Any application that requires little or no user input
* Applications that you do not need to monitor extensively

Unlike running an application on your personal machine, you do not call the application you wish to run directly. Instead, you create a job script that includes a call to your application. Job scripts are simply a set of resource requests and commands. When a job script is run, all the commands in the job script are executed on a compute node.

Once created, you can run your job script by passing it to the Slurm queue with the sbatch command followed by your job script name. An example of a batch script can be found in the next section.

<div style="display: flex; align-items:center; padding:1em; border-top: dashed 1px; border-bottom: dashed 1px; " >

<img alt="Read the Docs Logo" src="lia_test/img/RTD_Logo_Dark.svg" style="width:150px; margin-right:15px; background-color:white; border-radius:5px; padding:5px;"> 

<p style="margin-bottom:0;" >Learn more about [batch jobs](https://curc.readthedocs.io/en/latest/running-jobs/batch-jobs.html#batch-jobs-and-job-scripting)in our online documentation. </p>

</div>

#### sbatch Example

```
sbatch <your-jobscript-name>
```

Example Batch Script: 

```
#!/bin/bash

#SBATCH --nodes=1
#SBATCH --ntasks=1
#SBATCH --time=00:10:00
#SBATCH --partition=atesting
#SBATCH --qos=testing
#SBATCH --output=sample-%j.out

module purge

module load intel
module load mkl

echo "== This is the scripting step! =="
sleep 30
./executable.exe
echo "== End of Job =="
```

--- 

### ✏ Knowledge Check

<div style="width:45%; margin: 15px 2.5%; float:left;">

![A cartoon graphic showing a technican loading blocks labeled with different software modules onto a stack labeled LMOD](lia_test/img/Software_Stack.png)<!-- style="border:solid black 1px; border-radius: 15px;" -->

</div>

<div style="width:40%; border: solid black 1px; padding:10px; border-radius: 15px; float:left; margin: 15px 2.5%;" >

**Because Open OnDemand provides a user-friendly interface, it is the recommended method for executing high-performance, long-duration research workflows. **

<!-- 
data-solution-button="off" 
data-text-solved="Correct! <br> While you can use Open OnDemand to launch an interactive session (e.g. VS Code, RStudio, Matlab), this is really best for testing and developing a workflow. In most cases, a finalized workflow should be submitted to the system as a batch job. <br> <br> You can learn more about batch jobs in our <a href='https://curc.readthedocs.io/en/latest/running-jobs/batch-jobs.html'> online documentation</a> and in the next section. <br>"
data-text-failed="Not Quite! <br> This is somewhat of a trick question. While you can use Open OnDemand for most research tasks, it's really intended to help support DEVELOPING your workflow. Interactive apps (like RStudio and VS Code) are not ideal for running finalized workflows. <br> <br> For most research workflows, once they have been well tested, they should be submitted to the system as a batch job. <br> <br> You can learn more about batch jobs in our <a href='https://curc.readthedocs.io/en/latest/running-jobs/batch-jobs.html'> online documentation</a> and in the next section."
-->
[( )] True
[(X)] False
<script>

if ("@input" == "1") {
  let currentDate = new Date();
  sendData({username: user_name, email: user_email, course:"NEW_USER", question:"ONDEMAND_3", value: currentDate.toLocaleString()})
  send.lia("true")
} else { send.lia("")}

  "LIA: wait"
</script>

</div>

<div style="clear:both"></div>

## Software Management

In order for your computational workflows to actually "compute", you will need to select or prepare a software environment for them to run in. There are three primary methods for accessing software on Alpine or Blanca compute nodes:

1.  **Modules ([CURC-Provided Software](https://curc.readthedocs.io/en/latest/software/curc_provided_software.html)):** 

    * Enables you to access software installed and configured by CURC (e.g., MATLAB).
    * Advantage: You do not need to install the software yourself. The software is also configured to work optimally on the cluster. 

2.  **Package Managers ([Conda](https://curc.readthedocs.io/en/latest/software/python.html#using-the-curc-anaconda-environment), [Mamba](https://curc.readthedocs.io/en/latest/software/python.html#mamba-package-manager), [UV](https://curc.readthedocs.io/en/latest/software/uv.html)):**

    * Encouraged for Python or R users.
    * Advantage: Enables you to manage your own libraries and specific versions not available on the cluster.

3.  **Containers ([Apptainer](https://curc.readthedocs.io/en/latest/software/containerization.html)):**

    * Used for workflows requiring complex dependencies or specific operating systems.
    * Advantage: Enables you to install software that otherwise could not run or be installed on CURC systems. For example, software that requires a different operating system (e.g. Ubuntu) and/or specific system configuration.

### ✏ Knowledge Check

<div style="width:45%; margin: 15px 2.5%; float:left;">

![A cartoon graphic showing a technican loading blocks labeled with different software modules onto a stack labeled LMOD](lia_test/img/Software_Stack.png)<!-- style="border:solid black 1px; border-radius: 15px;" -->

</div>

<div style="width:40%; border: solid black 1px; padding:10px; border-radius: 15px; float:left; margin: 15px 2.5%;" >

Which of the following installation commands is **NOT** valid on a shared system, like Alpine?

<!-- data-solution-button="off" -->
[( )] `pip install <package>`
[(X)] `sudo apt-get install <PACKAGE>`
[( )] `conda install <package>`
[( )] None of the above
<script>
//Expected format for @input is a numeric array
// 0, 1, 2, 3 <- a single choice will return the entry id, not an array
let response = ""
let check = 0

//  pip
if ("@input" == "0") {
  response = "<b> pip install ... - Not Quite </b> <br> You can install Python packages using pip. Just make sure you have a Python module loaded or are working within an environment like conda, mamba, or uv. <br>"
} 

// sudo 
if ("@input" == "1") {
  response = "<b> sudo apt-get ... - Correct!</b> <br> To protect the stability and security of the system, CURC user accounts have restricted system access and are unable to access the operating system's package managers (apt-get) or use commands like 'sudo' which require superuser or root privileges. <br>"
    check=1
} 

// conda
if ("@input" == "2") {
  response = "<b> conda install ... - Not Quite </b> <br> You can use Anaconda to create environments and install conda supported packages and libraries. <br>"
} 

// None
if ("@input" == "3") {
  response = "<b> None of the above - Not Quite </b> <br> One of the install commands listed won't work on our shared system. Try again. <br>"
} 

document.getElementById("software_question_responses").innerHTML = response

//If all of the correct options have been selected, then send true so LIA will continue. Sending empty string (false) notifies lia that 
// the submission isn't fully complete
if(check == 1){
  let currentDate = new Date();
  sendData({username: user_name, email: user_email, course:"NEW_USER", question:"SOFTWARE", value: currentDate.toLocaleString()})
  send.lia("true")
} else { send.lia("")}

//Note - the wait line is required for lia to properly use the send option to the quiz

"LIA: wait"
</script>

<div id="software_question_responses"></div>

</div>

<div style="clear:both"></div>

---

## Storing Data on the Cluster
CURC provides two options for storing your data on the system - Core Storage and PetaLibrary.

![A cartoon graphic showing how to access CURC systems](lia_test/img/Data_Storage.png)<!-- style="border:solid black 1px; border-radius: 15px; width:75%; margin: 0 auto; display:block;" -->

### Core Storage

All users are provisioned space in three personal directories (that are accessible from both Alpine and Blanca):

**/home**

* Size: 2 GB
* Purpose: Saving small configuration files and personal files (e.g. ssh keys)
* Snapshots: Yes, data is saved/backed-up at regular intervals 

**/projects** 

* Size: 250 GB 
* Purpose: Source code, jobs scripts, larger files, software libraries, and compiled programs
* Snapshots: Yes, data is saved/backed-up at regular intervals

**/scratch** 

* Size: 10 TB 
* Purpose: Designed as performant I/O storage and where your data for compute jobs (both input and output) should be stored.
* Snapshots: **NONE**. Scratch is temporary storage. All files are deleted after 90 days and we cannot restore files once they are deleted. 

> If you need more storage space than what is provided by Core Storage, than you will want to consider purchasing a PetaLibrary allocation.

<div style="display: flex; align-items:center; padding:1em; border-top: dashed 1px; border-bottom: dashed 1px; " >

<img alt="Read the Docs Logo" src="lia_test/img/RTD_Logo_Dark.svg" style="width:150px; margin-right:15px; background-color:white; border-radius:5px; padding:5px;"> 

<p style="margin-bottom:0;" >Learn more about [Core Storage](https://curc.readthedocs.io/en/latest/compute/filesystems.html) (including how to manage file permissions and sharing data) in our online documentation. </p>

</div>



### PetaLibrary 

The PetaLibrary is a University of Colorado Boulder Research Computing service that supports the storage, archival, and sharing of research data. It is available to any researcher affiliated with the University of Colorado System (Boulder, Anschutz, Denver, Colorado Springs) at an internal cost rate. It is available at an external cost rate to researchers from other RMACC institutions. 

**Key Features:** 

* Storage space is purchased in 1 TB units per year 
* Different tiers are available that support data processing, long term archiving, and off-site backups. 
* Data can be shared with other institutions and researchers around the world
* Snapshots of the allocation are saved at regular intervals 

<div style="display: flex; align-items:center; padding:1em; border-top: dashed 1px; border-bottom: dashed 1px; " >

<img alt="Read the Docs Logo" src="lia_test/img/RTD_Logo_Dark.svg" style="width:150px; margin-right:15px; background-color:white; border-radius:5px; padding:5px;"> 

<p style="margin-bottom:0;" >You can learn more about Petalibrary's [different tiers and options](https://curc.readthedocs.io/en/latest/petalibrary/allocation_types.html) in our online documentation. You can find the [current rates](https://www.colorado.edu/rc/resources/petalibrary/storageandrates) for Petalibrary allocations on our main website.</p>

</div>


### Data Transfers

Research Computing supports several methods of file transfer. File transfers from a local system can be done through a web-based application called Globus or through command-line tools such as secure copy (scp), secure ftp (sftp) and rsync.

Data transfers using SSH protocols can be done through the CURC data transfer nodes (DTN). Transfers via the DTNs support all types of transfers, including large and/or frequent file transfers and automated (passwordless) transfers. 

> We generally recommend using Globus for handling large file transfers to the system. But if you aren't sure how to handle a tricky data transfer, feel free to reach out to User Support through our [support request form](https://colorado.service-now.com/req_portal?id=ucb_sc_rc_form). We are always happy to help!s

<div style="display: flex; align-items:center; padding:1em; border-top: dashed 1px; border-bottom: dashed 1px; " >

<img alt="Read the Docs Logo" src="lia_test/img/RTD_Logo_Dark.svg" style="width:150px; margin-right:15px; background-color:white; border-radius:5px; padding:5px;"> 

<p style="margin-bottom:0;" >You can learn more about [data transfers](https://curc.readthedocs.io/en/latest/compute/data-transfer.html) and the various protocols we support in our online documentation. </p>

</div>

### ✏ Knowledge Check

<div style="width:45%; margin: 15px 2.5%; float:left;">

![A cartoon graphic representing the core storage](lia_test/img/Core_Storage.png)<!-- style="border:solid black 1px; border-radius: 15px;" -->

</div>

<div style="width:40%; border: solid black 1px; padding:10px; border-radius: 15px; float:left; margin: 15px 2.5%;" >

You have finished your computations and have important results you need to keep for 3 years. **Where should you NOT store them?**

<!-- data-solution-button="off" -->
[( )] PetaLibrary
[( )] /projects Directory
[( )] Download to local storage
[(X)] /scratch Directory
<script>
//Expected format for @input is a numeric array
// 0, 1, 2, 3 <- a single choice will return the entry id, not an array
let response = ""
let check = 0

//  PetaLibrary
if ("@input" == "0") {
  response = "<b> PetaLibrary - Not Quite </b> <br> As long as you are able to fund the PetaLibrary allocation for the full 3 years, then it is a great option for long term storage. <br>"
} 

// /projects
if ("@input" == "1") {
  response = "<b> /projects Directory - Not Quite!</b> <br> /projects is a great option for storing files and will be preserved for up to 5 years, as stated in our data retention policy : https://curc.readthedocs.io/en/latest/additional-resources/policies.html#core-storage-data-retention<br>"
} 

// Local Download
if ("@input" == "2") {
  response = "<b> Download to local storage - Not Quite </b> <br> All data you store on the CURC system can be safely downloaded to offsite storage, like a local hard drive. This is a great way to back-up and preserve your research data. <br>"
} 

// /scratch
if ("@input" == "3") {
  response = "<b> /scratch Directory - Correct! </b> <br> /scratch storage is only a temporary storage option. All files are deleted from /scratch 90 days after they are created, which is well below the 3 Years needed.<br>"
  check=1
} 

document.getElementById("storage_question_responses").innerHTML = response

//If all of the correct options have been selected, then send true so LIA will continue. Sending empty string (false) notifies lia that 
// the submission isn't fully complete
if(check == 1){
  let currentDate = new Date();
  sendData({username: user_name, email: user_email, course:"NEW_USER", question:"DATA_STORAGE", value: currentDate.toLocaleString()})
  send.lia("true")
} else { send.lia("")}

//Note - the wait line is required for lia to properly use the send option to the quiz

"LIA: wait"
</script>

<div id="storage_question_responses"></div>

</div>

<div style="clear:both"></div>


---

## User Policies

To maintain a healthy system, you must adhere to the following policies:

1.  **Login Nodes:** Do **NOT** run computational jobs on login nodes. Use interactive or batch jobs to run work on compute nodes.
2.  **Acknowledgment:** Use of CURC resources must be acknowledged in any and all publications. You can find more details on citing CURC resources on our [Acknowledging CURC Resources webpage](https://curc.readthedocs.io/en/latest/getting_started/acknowledge_curc_resources.html).
3.  **Acceptable Use:** Resources may not be used for personal financial gain or commercial purposes.
4.  **Acceptable Data:** Do not store US government Classified, nor any Controlled Unclassified Information including, but not limited to, data subject to the US federal Health Insurance Portability and Accountability Act (HIPAA), the US federal Family Educational Rights and Privacy Act (FERPA), or the International Traffic in Arms Regulations (ITAR). For sensitive data storage, check the [Secure Research Computing Resources webpage](https://www.colorado.edu/rc/secure-research-computing-resources).
5.  **Planned Maintenance:** The first Wednesday of each month is reserved for Planned Maintenance (PM). CURC resources will be unavailable during this time. Check https://curc.statuspage.io/ for updates on PMs.

<div style="display: flex; align-items:center; padding:1em; border-top: dashed 1px; border-bottom: dashed 1px; " >

<img alt="Read the Docs Logo" src="lia_test/img/RTD_Logo_Dark.svg" style="width:150px; margin-right:15px; background-color:white; border-radius:5px; padding:5px;"> 

<p style="margin-bottom:0;" >You can find a full list of and additional details on our [User Policies](https://curc.readthedocs.io/en/latest/additional-resources/policies.html) in our online documentation. </p>

</div>


### ✏ Knowledge Check

<div style="width:45%; margin: 15px 2.5%; float:left;">

![A cartoon graphic representing the User Policies](lia_test/img/User_Policies.png)<!-- style="border:solid black 1px; border-radius: 15px;" -->

</div>

<div style="width:40%; border: solid black 1px; padding:10px; border-radius: 15px; float:left; margin: 15px 2.5%;" >

Which of the following actions violate CURC User Policies?

<!-- data-solution-button="off" -->
[[ ]] Editing your project's code in Open OnDemand's File Browser
[[X]] Storing medical records for patients in study on Alzheimer treatments 
[[X]] Running a simple Python program from a login node 
[[ ]] Submitting hundreds of compute jobs to the Alpine Cluster
<script>
//Expected format for @input is a numeric array
// [0,0,0,1] 
let response = ""
let check = 0

//  Editing your project
if (@input[0] == "1") {
  response += "<b>Editying your project's... - Not Quite.</b> <br> Simple editing of text files and code from the File Browser or the Alpine Shell is perfectly fine. However, downloading large files using Open OnDemand or performing compute heavy operations (uncompressing files, running scripts, etc.) from a login node is not acceptable. <br> <br>"
} 

//Medical records 
if (@input[1]  == "1") {
  response += "<b> Storing medical records... - Correct!</b>  <br> Medical records are typically protected under HIPPA and other government regulations. But there is a lot of nuance when it comes to data records - so if you are ever unsure, please reach out to the Research Computing support staff. This is a situation where it is better to be safe, than sorry. <br> <br>"
  check+=1
} 

// Login Node
if (@input[2] == "1") {
  response += "<b> Running a simple Python program... - Correct!</b> <br> While simple programs may seem small - they still use compute resources. Since the login nodes are a shared resource, they really can't support even simple Python scripts. <br> Instead of using the login nodes, jump onto a compute node which has lots of available compute resources. This is good for the system and for you - CURC does suspend accounts that run programs on the login nodes. <br> <br>"
  check+=1
} 

// Hundreds of Jobs
if (@input[3] == "1") {
  response += "<b> Submitting hundreds of compute jobs ... - Not Quite.</b> <br> The Alpine Cluster is designed for handling jobs at scale. Many users submit hundreds of jobs a day, but there are some limitations on how many jobs you can submit and/or run at the same time. <br> You can find limitations on job submission in our <a href='https://curc.readthedocs.io/en/latest/clusters/alpine/alpine-hardware.html#quality-of-service-qos'> online documentation</a> <br> <br>"
} 

document.getElementById("user_policy_question_responses").innerHTML = response

if(check == 2){
  let currentDate = new Date();
  sendData({username: user_name, email: user_email, course:"NEW_USER", question:"USER_POLICIES", value: currentDate.toLocaleString()})
  send.lia("true")
} else { send.lia("")}

//Note - the wait line is required for lia to properly use the send option to the quiz

"LIA: wait"
</script>

<div id="user_policy_question_responses"></div>

</div>

<div style="clear:both"></div>


---

## Conclusion

**Congratulations! You have completed the New CURC User Training!**

If you have specific questions about CURC resources, please fill out our [support request form](https://colorado.service-now.com/req_portal?id=ucb_sc_rc_form).

To learn more about Research Computing, consider:

* Reading the [Online Documentation](https://curc.readthedocs.io/en/latest/getting_started/navigating_docs.html).
* Attending a [Workshop Training Session](https://curc.readthedocs.io/en/latest/getting_started/current-sem-trainings.html).

--- 

<script hidden>
 let currentDate = new Date();
  sendData({username: user_name, email: user_email, course:"NEW_USER", question:"CONCLUSION", value: currentDate.toLocaleString()})
  "LIA: wait"
</script>

<div style="width:40%; border: solid black 1px; padding:10px; border-radius: 15px; margin: 0 auto;" >

Please let us know how useful you found this online training: 

  [(2)] Very useful
  [(1)] Somewhat useful
  [(0)] Neutral 
  [(-1)] Not so useful
  [(-2)] Not very useful
<script>
  let choices = @input;
  for (const [key, value] of Object.entries(choices)) {
    if(value === 1){
      sendData({username: user_name, email: user_email, course:"NEW_USER", question:"REVIEW_SCORE", value: key })
      send.lia("Feedback Sent", [], false)
      break;
    }
  }

</script>

</div>

<br>

<div style="width:40%; border: solid black 1px; padding:10px; border-radius: 15px; margin: 0 auto;" >

Please provide any comments you would like to share with us on this course: 

[[___ ___ ___ ___]]
<script>

  sendData({username: user_name, email: user_email, course:"NEW_USER", question:"COMMENTS", value: `@input`})
  send.lia("Feedback Sent", [], false)
  "LIA: wait"
</script>


</div>

<div style="clear:both"></div>