<!-- 
@@@ Note - need to convert this to a Macro
data-text-solved="That's Correct!"
data-text-failed="Not Quite!"

-->


# Research Computing New User Training

Welcome to the Research Computing New User Training! This course covers the ins and outs of High Performance Computing (HPC) with CURC. 

In this training, you will learn about the resources available to you and how they support your research. These resources are organized into three broad categories:

1.  **HPC Clusters:** Computational hardware for supporting a variety of research workflows.
2.  **Data Storage:** For backing-up research data and/or storing large datasets that are fed into computational workflows.
3.  **Cloud Support:** Assistance with creating and sharing cloud resources (e.g., Azure, AWS, GCP).


<div style="width:45%; margin: 15px 2.5%; float:left;">

![A student is taking an online quiz to test their knowledge of HPC systems](016658ed4df0660315deca8e3d5e7933520b10a8.png)<!-- style="border:solid black 1px; border-radius: 15px;" -->

</div>

<div style="width:40%; border: solid black 1px; padding:10px; border-radius: 15px; float:left; margin: 15px 2.5%;" >

**Please select your partner institution: **

[(1)] University of Colorado Boulder
[(2)] Colorado State University
[(3)] CU Anschutz
[(4)] RMACC Institution
[(0)] Other

</div>

> **Note:** Multiple questions are embedded in this training to evaluate your understanding and help you avoid common pitfalls.<!-- style="clear:both;" -->

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


Which of the following research tasks are suitable for an HPC cluster, like Alpine or Blanca?

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
  response += "<br> <b>Training a deep learning neural network model using a large dataset (Gigabytes to Terabytes) </b> <br>Correct! Training a deep learning neural network requires a massive amount of simultaneous computations and a lots of memory capacity to handle the model and dataset, making it a classic HPC workflow. <br>"
  check+=1
} 

//Spreadsheet 
if (@input[1]  == "1") {
  response += "<br> <b> Creating a spreadsheet to calculate the average weight and height of 30 penguins</b> <br>Not Quite. This task is a simple, sequential calculation that requires minimal resources and is easily handled by a standard personal computer. It does not benefit from or require the parallel power of a cluster. <br>"
} 


// CFD Simulation
if (@input[2] == "1") {
  response += "<br> <b>Running a computational fluid dynamics (CFD) simulation of airflow over an airplane's wing </b> <br>Correct! Simulations often require coordinated, parallel computation across many CPU cores (and GPUs) in order to complete within a reasonable timeframe. <br>"
  check+=1
} 

// Hosting a website
if (@input[3] == "1") {
  response += "<br> <b> Hosting an interactive website for visualizing historical weather data </b> <br>Not Quite. While visualizing large datasets can be a great HPC workflow, CURC does not support web servers. Research workflows that require always-on services (like web servers) need to be setup in the cloud or on a non-CURC cluster.  <br>"
} 

document.getElementById("hpc_question_responses").innerHTML = response

if(check == 2){
  send.lia("true")
} else { send.lia("")}

//Note - the wait line is required for lia to properly use the send option to the quiz

"LIA: wait"
</script>

<div id="hpc_question_responses"></div>

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

### Knowledge Check

**Scenario:** A research team needs to run an intensive data analysis application that will need dozens of CPUs and enough memory to load a large dataset (~150 GB corpus of Latin Texts) into memory.

Based on the info above, which compute node type is most appropriate?

[(X)] CPU Nodes
[( )] High-Memory Nodes
[( )] GPU Nodes
[( )] None - Not an appropriate HPC workflow

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

### Knowledge Check

Which of the following installation commands is **NOT** valid on a shared system, like Alpine?

[( )] `pip install <package>`
[(X)] `sudo apt-get install <PACKAGE>`
[( )] `conda install <package>`
[( )] None of the above

---

## Open OnDemand

Open OnDemand is a browser-based web portal that serves as a single access point for CURC resources.


**Key Features:**
* **File Browser:** Upload, download, and edit files.
* **Interactive Apps:** Launch Jupyter Notebooks, RStudio, VS Code, and MATLAB in the browser.
* **Job Composer:** Create and submit Slurm jobs via forms.
* **Shell Access:** Open a terminal window directly in your browser.

### Knowledge Check

**1. Can you use Open OnDemand to upload/download your research dataset?**

[(X)] Yes
[( )] No

**2. Can you use Open OnDemand to launch and run your full research workflow from RStudio?**

[(X)] Yes
[( )] No

**3. To open a terminal on CURC's clusters, you must setup a local application on your computer, like Putty or iTerm.**

[( )] Yes
[(X)] No

[[?]] Open OnDemand provides "Shell Access" directly in the web browser, so local terminal apps are not strictly required.

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

### Knowledge Check

You have finished your computations and have important results you need to keep for 3 years. **Where should you NOT store them?**

[( )] PetaLibrary
[( )] /projects Directory
[( )] Download to local storage
[(X)] /scratch Directory

---

## User Policies

To maintain a healthy system, you must adhere to the following policies:

1.  **Login Nodes:** Do **NOT** run computational jobs on login nodes. Use `srun` or `sbatch` to run work on compute nodes.
2.  **Acknowledgment:** You must acknowledge CURC in publications.
3.  **Acceptable Use:** Resources may not be used for personal financial gain or commercial purposes.
4.  **Acceptable Data:** Do not store US Government Classified data or Controlled Unclassified Information (CUI).

### Knowledge Check

Which of the following actions violate CURC User Policies?

[[ ]] Editing your project's code in Open OnDemand's File Browser
[[X]] Storing medical records for patients in study on Alzheimer treatments 
[[X]] Running a simple python program from a Login Node 
[[ ]] Submitting hundreds of compute jobs to the Alpine Cluster

---

## Conclusion

**Congratulations!** You have completed the New CURC User Training.

If you have specific questions about CURC resources, please fill out our [Online Help Form](https://colorado.service-now.com/req_portal?id=ucb_sc_rc_form).

To learn more, consider:
* Reading the [Online Documentation](https://curc.readthedocs.io/en/latest/).
* Attending a [Workshop Training Session](https://curc.readthedocs.io/en/latest/getting_started/current-sem-trainings.html).