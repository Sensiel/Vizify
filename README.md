# Project of Data Visualization (COM-480)

| Student's name | SCIPER |
| -------------- | ------ |
| Imane Lahrichi| 360854 |
| Imane Raihane| 362230 |
| Victor Zablocki | 361602 |

[Milestone 1](#milestone-1) • [Milestone 2](#milestone-2) • [Milestone 3](#milestone-3)

## Milestone 1 (20th March, 5pm)

**10% of the final grade**

This is a preliminary milestone to let you set up goals for your final project and assess the feasibility of your ideas.
Please, fill the following sections about your project.

*(max. 2000 characters per section)*

### Dataset

https://www.kaggle.com/datasets/bsthere/youtube-trending-videos-stats-2026

### Problematic

#### How do YouTubers design video metadata to maximize their visibility, and how do these strategies interact with the way videos become trending over time? Do certain content niches exploit these mechanisms more effectively, and is visibility influenced by engagement, bias, or irregular patterns?

### Topic and Motivation

YouTube's Trending page appears algorithmic and based on meritocraty, but it has been shown that optimization is real and can play a big part in the virality of today's content. Titles, tags, publish times and other metdata are carefully chosen. Rather than observing what is currently popular or focus on their static characteristics, this project has for goal to study the design behind virality : the patterns in how trending videos are made and whether some content niches have found more effective formulas (maybe specific to their category) than others, and we are even going further by analyzing how trends emerge over time, whether engagement has a direct causal impact on visibility, and whether the system exhibits bias or irregular or unfair patterns. This allows us to move from a descriptive approach to a more dynamic and critical understanding of virality.

### What am we trying to show?

The main axis is the relationship between metadata strategy and engagement performance, broken down by content sub-genre. Specifically:

**Title writing conventions** : Do trending videos follow naming conventions (clickbait, emojis, caps lock, general sentiment, questions)? Does this vary by niche?

**Tag and keyword clusters** : Do high-performing niches have hidden keyword strategies?

**Metadata combination** : Can we identify combinations (tag count, title length, publish hour) that correlate with stronger visibility.

**Sub-genre** : Beyond youtube built-in categories, which specific niches goes above average on Trending relative to their volume?

**Temporal dynamics** : How fast do videos become trending? How do views, likes and comments evolve over time? 

**Causality vs correlation** : Does engagement (likes, comments) actually contribute to visibility, or is it only correlated with it?

**Bias & fairness** : Are certain categories systematically over-represented or favored in Trending?

**Anomaly detection** : Can we identify videos with unusual patterns suggesting atypical behavior or algorithmic effects?

### Target Audience

Content creators / influencers searching for optimization tips, media & communication students studying how platform algorithms shapes the creative decisions, how trends emerge but also whether visibility is fairly distributed .

### Exploratory Data Analysis

There's 178,399 rows, from 11 different countries. The typical trending video gets around 231,191 views. Countries with the highest median like-rate are Russia, Brasil, Germany and the United States.
The youtube categories with highest median views are Pets & Animals, Comedy, Nonprofits & Activism.
The top 10 most viewed videos amongst the trending video in early 2026 are all music videos (half of them song from Gorillaz or T.I.)
Gaming is the largest category by volume (about 76k rows).

### Related work


#### What others have already done with the data?

Existing work on YouTube trending video datasets typically follows several distinct approaches.

Some studies focus on exploratory data analysis. For example, the Kaggle notebook [Exploratory Data Analysis of YouTube Trending Videos](https://www.kaggle.com/code/hoonkeng/deep-analysis-on-youtube-trending-videos-eda) examines the distribution of views, likes, and comments, and highlights correlations between engagement metrics. This type of work provides a general overview of the dataset and helps identify common statistical patterns.

Other approaches rely on machine learning models to predict video performance. The project [Machine Learning Project: YouTube Trending Analysis](https://github.com/GateraGael/Machine-Learning-Project-Youtube-Trend-Analysis) uses metadata features such as title, category, and engagement variables to build predictive models of video popularity.

Additional works explore category performance, posting time effects, or sentiment analysis on titles and tags. These studies aim to identify patterns associated with higher engagement or visibility, often using statistical analysis.

Overall, prior work mainly focuses on describing patterns in the data or predicting outcomes based on available features.

#### Why is your approach original?

Despite all studies conducted on this dataset, a consistent gap remains: metadata is generally treated as an outcome descriptor rather than as the result of intentional creator behavior. Instead of focusing on what trending videos look like, we focus on how YouTube creators deliberately craft their titles, tags, and descriptions to maximize their visibility.

Rather than only comparing engagement outcomes across categories, we shift the focus toward the strategies behind metadata design. In addition, our approach extends beyond static analysis by incorporating temporal dynamics, allowing us to study how videos become trending over time.

We also go further by examining whether engagement plays a causal role in visibility, rather than relying only on correlations, and by exploring potential biases and anomalies in the system.

This combination of strategic, temporal, and critical perspectives provides a more complete and less explored understanding of virality.

#### What source of inspiration do you take? Visualizations that you found on other websites or magazines (might be unrelated to your data).

We take inspiration from simple and effective visualizations used in common platforms like FiveThirtyEight, The Economist, and Kaggle. In particular, we rely on time-series plots to show how trends evolve, bar charts to compare categories or countries, and scatter plots to detect unusual patterns.

Our goal is to use visuals that highlight evolution, differences, and anomalies, rather than only static summaries.

<img width="1361" height="683" alt="1_xRwFyfv9GeB4rUbCIuiDqw" src="https://github.com/user-attachments/assets/60e39899-c80c-48d5-a487-a5cdc405e21a" />


#### In case you are using a dataset that you have already explored in another context (ML or ADA course, semester project...), you are required to share the report of that work to outline the differences with the submission for this class.

We are using a newer dataset, we haven't worked with before.

## Milestone 2 (17th April, 5pm)

**10% of the final grade**


## Milestone 3 (29th May, 5pm)

**80% of the final grade**


## Late policy

- < 24h: 80% of the grade for the milestone
- < 48h: 70% of the grade for the milestone

