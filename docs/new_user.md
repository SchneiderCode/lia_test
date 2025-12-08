<!-- 

data-solution-button="off" 

script: https://raw.githubusercontent.com/SchneiderCode/lia_test/refs/heads/main/docs/sendData.js

-->


# Research Computing New User Training

Welcome to the Research Computing New User Training! This course covers the ins and outs of High Performance Computing (HPC) with CURC. 

In this training, you will learn about the resources available to you and how they support your research. These resources are organized into three broad categories:

1.  **HPC Clusters:** Computational hardware for supporting a variety of research workflows.
2.  **Data Storage:** For backing-up research data and/or storing large datasets that are fed into computational workflows.
3.  **Cloud Support:** Assistance with creating and sharing cloud resources (e.g., Azure, AWS, GCP).

<div style="width:45%; margin: 15px 2.5%; float:left;">

![A student is taking an online quiz to test their knowledge of HPC systems](lia_test/img/RC_Quiz.png)<!-- style="border:solid black 1px; border-radius: 15px;" -->

</div>

<div style="width:40%; border: solid black 1px; padding:10px; border-radius: 15px; float:left; margin: 15px 2.5%;" >

**Please select your partner institution: **

[(1)] University of Colorado Boulder
[(2)] Colorado State University
[(3)] CU Anschutz
[(4)] RMACC Institution
[(0)] Other
<script>
//Primary / Initial quesiton - Ask for CURC Username 
// Institutional Email 
// Institution not needed 
// Have a prior question - do you have a CURC account. 
  
  // 3. Execute  sendData(url, username, email,course,question)
  sendData(url='https://script.google.com/macros/s/AKfycbwP4LGNJU7o439IZ-qP-gsPiMcmVgDXENW6X8w_bl2BSxUpw7R7Zjg_rOibLcJnrFrDaQ/exec', 
           username="bob",
           email="bob@email.com",
           course="NEW_USER",
           question="START");
"LIA: wait"
</script>
</div>

<div style="clear:both"></div>

> **Note:** Multiple questions are embedded in this training to evaluate your understanding and help you avoid common pitfalls.

---

## HPC Clusters - Alpine & Blanca


**What is an HPC cluster?**

An HPC (High-Performance Computing) cluster is a group of individual computers (called "nodes") linked together by a very fast network. This design allows them to work together as a single, unified system.

* **The Analogy:** If a workstation is one person solving a puzzle, an HPC cluster is a huge team of hundreds of people working on different sections of the puzzle at the same time.
* **The Benefit:** This "parallel" approach allows for complex simulations, analyzing enormous datasets, or training AI models in hours/days rather than months/years.

**CURC Supported Clusters**

| Cluster | Description |
| :--- | :--- |
| **Alpine** | The third-generation HPC cluster composed of hardware from CU Boulder, CSU, and Anschutz. It offers hundreds of compute nodes and is available to all RC users. |
| **Blanca** | A shared "condo" cluster consisting of nodes owned by individual research groups. Partners get priority access on their nodes, but can run jobs on other idle nodes. |

<div style="width:45%; margin: 15px 2.5%; float:left;">

![A cartoon graphic of an HPC Cluster's hardware](lia_test/img/HPC_Clusters.png)<!-- style="border:solid black 1px; border-radius: 15px;" -->

</div>

<div style="width:40%; border: solid black 1px; padding:10px; border-radius: 15px; float:left; margin: 15px 2.5%;" >

Which of the following research tasks are suitable for an HPC cluster, like Alpine or Blanca?

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
  response += "<b>Training a deep learning... - Correct!</b> <br> Training a deep learning neural network requires a massive amount of simultaneous computations and a lots of memory capacity to handle the model and dataset, making it a classic HPC workflow. <br>"
  check+=1
} 

//Spreadsheet 
if (@input[1]  == "1") {
  response += "<b> Creating a spreadsheet... - Not Quite.</b>  <br> This task is a simple, sequential calculation that requires minimal resources and is easily handled by a standard personal computer. It does not benefit from or require the parallel power of a cluster. <br>"
} 

// CFD Simulation
if (@input[2] == "1") {
  response += "<b> Running a computational fluid ... - Correct!</b> <br> Simulations often require coordinated, parallel computation across many CPU cores (and GPUs) in order to complete within a reasonable timeframe. <br>"
  check+=1
} 

// Hosting a website
if (@input[3] == "1") {
  response += "<b> Hosting an interactive website... - Not Quite.</b> <br> While visualizing large datasets can be a great HPC workflow, CURC does not support web servers. Research workflows that require always-on services (like web servers) need to be setup in the cloud or on a non-CURC cluster.  <br>"
} 

document.getElementById("hpc_question_responses").innerHTML = response

if(check == 2){
  send.lia("true")
} else { send.lia("")}

//Note - the wait line is required for lia to properly use the send option to the quiz

"LIA: wait"
</script>

<div id="hpc_question_responses"></div>

</div>

<div style="clear:both"></div>

---

## Alpine Hardware - Compute Nodes

A "compute node" is hardware dedicated to running computational workflows. Alpine offers three main types:

1.  **CPU Nodes:** 

    * Primary node type for most users. 
    * Configured for a wide variety of workflows (small jobs to multi-node coordination). 
    *  Specs: At least 256 GB RAM and typically 64 Cores per node.

2.  **High-Memory Nodes:**

    * Specialized CPU nodes with massive memory (RAM).
    * Specs: 1 or 2 Terabytes of memory (1 TB = 1,000 GB).
    * Use Case: Legacy programs that struggle with batch processing or cannot parallelize across nodes.

3.  **GPU Nodes:**

    * Include one or more Graphical Processing Units (GPUs).
    * Use Case: Training Machine Learning models, matrix-heavy calculations, and GPU-accelerated software.

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
  send.lia("true")
} else { send.lia("")}

//Note - the wait line is required for lia to properly use the send option to the quiz

"LIA: wait"
</script>

<div id="node_question_responses"></div>

</div>

<div style="clear:both"></div>


---

## Software Management


There are three primary methods for accessing software on Alpine and Blanca:

1.  **LMOD Modules:** 

    * The primary method. Dynamically modifies the shell environment to access specific compilers and applications (e.g., MATLAB).
    * You may never need to install a program if the module exists.

2.  **Anaconda Environments:**

    * Encouraged for Python or R users.
    * Allows users to manage their own libraries and specific versions not available on the cluster.

3.  **Containers (Apptainer):**

    * Used for workflows requiring complex dependencies or specific operating systems.
    * Ensures projects run consistently over time and across different systems.

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
  response = "<b> pip install ... - Not Quite </b> <br> You can install Python packages using pip. Just make sure you have a Python module loaded or are working within an Anaconda environment. <br>"
} 

// sudo 
if ("@input" == "1") {
  response = "<b> sudo apt-get ... - Correct!</b> <br> To protect the stability and security of the system, CURC user accounts have restricted system access and are unable to use commands like 'sudo' which require superuser or root privileges.  <br>"
    check=1
} 

// conda
if ("@input" == "2") {
  response = "<b> conda install ... - Not Quite </b> <br> You can use Anaconda to create environments and install condo-supported packages and libraries. <br>"
} 

// None
if ("@input" == "3") {
  response = "<b> None of the above - Not Quite </b> <br> One of the install commands listed won't work on our shared system. Try again. <br>"
} 

document.getElementById("software_question_responses").innerHTML = response

//If all of the correct options have been selected, then send true so LIA will continue. Sending empty string (false) notifies lia that 
// the submission isn't fully complete
if(check == 1){
  send.lia("true")
} else { send.lia("")}

//Note - the wait line is required for lia to properly use the send option to the quiz

"LIA: wait"
</script>

<div id="software_question_responses"></div>

</div>

<div style="clear:both"></div>


---

## Open OnDemand

Open OnDemand is a browser-based web portal that serves as a single access point for CURC resources.


**Key Features:**

* **File Browser:** Upload, download, and edit files.
* **Interactive Apps:** Launch Jupyter Notebooks, RStudio, VS Code, and MATLAB in the browser.
* **Job Composer:** Create and submit Slurm jobs via forms.
* **Shell Access:** Open a terminal window directly in your browser.

<div style="width:45%; margin: 15px 2.5%; float:left;">

![A cartoon graphic of a user interacting with the Open OnDemand web portal](lia_test/img/Open_OnDemand.png)<!-- style="border:solid black 1px; border-radius: 15px;" -->

</div>

<div style="width:40%; border: solid black 1px; padding:10px; border-radius: 15px; float:left; margin: 15px 2.5%;" >

**1. Can you use Open OnDemand to upload/download your research dataset?**

<!-- 
data-solution-button="off" 
data-text-solved="Correct! <br> Open OnDemand is only intended for light data operations - like working with text files. "
data-text-failed="Not Quite! <br> While Open OnDemand provides a file browser, it is only intended for light data operations - like working with text files. If you need to upload or download a large dataset, you'll need to use one of our data transfer tools (like Globus). <br> <br> Learn More:  https://curc.readthedocs.io/en/latest/compute/data-transfer.html"
-->
[( )] Yes
[(X)] No

**2. Can you use Open OnDemand to launch and run your full research workflow from RStudio?**

<!-- 
data-solution-button="off" 
data-text-solved="Correct! <br> While you can use Open OnDemand to launch an interactive session with RStudio, this is really best for testing and developing a workflow. A finalized workflow should be submitted to the system as a batch job. <br> <br> Learn More: https://curc.readthedocs.io/en/latest/running-jobs/batch-jobs.html"
data-text-failed="Not Quite! <br> This is somewhat of a trick question. Yes, you can use RStudio within Open OnDemand but it's really intended to help support DEVELOPING your workflow. Interactive apps (like RStudio and VS Code) are not ideal for running finalized workflows. <br> Once a research workflow has been well tested, it should be submitted to the system as a batch job. <br> <br> Learn More:  https://curc.readthedocs.io/en/latest/running-jobs/batch-jobs.html"
-->
[( )] Yes
[(X)] No

**3. To open a terminal on CURC's clusters, you must setup a local application on your computer, like Putty or iTerm.**

<!-- 
data-solution-button="off" 
data-text-solved="Correct! <br> Open OnDemand provides an interactive shell (Alpine Shell) which can be used instead of local terminal applications. This is a great way to access the system's Linux terminal without the hassle of setting up Putty or other terminal applications."
data-text-failed="Not Quite! <br>Open OnDemand's Alpine Shell provides all RC users a web-based terminal for running Linux commands, editing files, other command-line operations. "
-->
[( )] Yes
[(X)] No

</div>

<div style="clear:both"></div>

---

## Data Storage


**Core Storage**
All users receive space in three personal directories:

| Directory | Size Limit | Purpose | Performance/Backup |
| :--- | :--- | :--- | :--- |
| **/home** | 2 GB | Source code, small compiled programs, job scripts. | Backed up. |
| **/projects** | 250 GB | Software builds and smaller datasets. | Backed up. |
| **/scratch** | 10 TB | **All compute jobs** should be run here. | High-performance, **NOT backed up**. Temporary storage only. |

**PetaLibrary**
Available for storage, archival, and sharing of research data. It incurs a yearly charge per TB.

<div style="width:45%; margin: 15px 2.5%; float:left;">

![A cartoon graphic representing the core storage](lia_test/img/Core_Storage.png)<!-- style="border:solid black 1px; border-radius: 15px;" -->

![A cartoon graphic representing PetaLibrary](lia_test/img/PetaLibrary.png)<!-- style="border:solid black 1px; border-radius: 15px;" -->

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

1.  **Login Nodes:** Do **NOT** run computational jobs on login nodes. Use `srun` or `sbatch` to run work on compute nodes.
2.  **Acknowledgment:** You must acknowledge CURC in publications.
3.  **Acceptable Use:** Resources may not be used for personal financial gain or commercial purposes.
4.  **Acceptable Data:** Do not store US Government Classified data or Controlled Unclassified Information (CUI).

<div style="width:45%; margin: 15px 2.5%; float:left;">

![A cartoon graphic representing the User Policies](lia_test/img/User_Policies.png)<!-- style="border:solid black 1px; border-radius: 15px;" -->


</div>

<div style="width:40%; border: solid black 1px; padding:10px; border-radius: 15px; float:left; margin: 15px 2.5%;" >

Which of the following actions violate CURC User Policies?

<!-- data-solution-button="off" -->
[[ ]] Editing your project's code in Open OnDemand's File Browser
[[X]] Storing medical records for patients in study on Alzheimer treatments 
[[X]] Running a simple python program from a Login Node 
[[ ]] Submitting hundreds of compute jobs to the Alpine Cluster
<script>
//Expected format for @input is a numeric array
// [0,0,0,1] 
let response = ""
let check = 0

//  Editing your project
if (@input[0] == "1") {
  response += "<b>Editying your project's... - Not Quite.</b> <br> Simple editing of text files and code from the File Browser or the Alpine Shell is perfectly fine. The main concern is that you aren't downloading large files (Open OnDemand) or doing compute heavy operations (uncompressing files, running scripts, etc.) from a login node. <br> <br>"
} 

//Medical records 
if (@input[1]  == "1") {
  response += "<b> Storing medical records... - Correct!</b>  <br> Medical records are typically protected under HIPPA and other government regulations. But there is a lot of nuance when it comes to data records - so if you are ever unsure, please reach out to the Research Computing support staff. This is a situation where it is better to be safe, than sorry. <br> <br>"
  check+=1
} 

// Login Node
if (@input[2] == "1") {
  response += "<b> Running a simple python program... - Correct!</b> <br> While simple programs may seem small - they still use compute resources. Since the login nodes are a shared resource, they really can't support even simple python scripts. <br> Instead of using the login nodes, jump onto a compute node like acompile which has lots of available resources. This is good for the system and for you - CURC does suspend accounts that run programs on the login nodes. <br> <br>"
  check+=1
} 

// Hundreds of Jobs
if (@input[3] == "1") {
  response += "<b> Submitting hundreds of compute jobs ... - Not Quite.</b> <br> The Alpine Cluster is designed for handling jobs at scale. Many users submit hundreds of jobs a day, but there are some limitations on how many jobs you can submit and/or run at the same time. <br> You can find limitations on job submission in our documentation here: https://curc.readthedocs.io/en/latest/clusters/alpine/alpine-hardware.html#quality-of-service-qos  <br> <br>"
} 

document.getElementById("user_policy_question_responses").innerHTML = response

if(check == 2){
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

**Congratulations!You have completed the New CURC User Training!**

If you have specific questions about CURC resources, please fill out our [Online Help Form](https://colorado.service-now.com/req_portal?id=ucb_sc_rc_form).

To learn more about Research Computing, consider:

* Reading the [Online Documentation](https://curc.readthedocs.io/en/latest/).
* Attending a [Workshop Training Session](https://curc.readthedocs.io/en/latest/getting_started/current-sem-trainings.html).