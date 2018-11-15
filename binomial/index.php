<!DOCTYPE HTML>
<html>
<head>
	<meta charset="utf-8"/>
	<title>Probability in R: Binomial Distribution | Infermath</title>
	<meta name="description" content="An overview of discrete probability distributions and methods of generating them in R. Introduction to R language and numerical analysis."/>
	<meta name="keywords" content="r programming, r language, r statistics, random variable, probability distribution, probability and statistics, discrete random variable, random variables and probability distributions, numerical methods, numerical analysis"/>
	<meta hhtp-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
	<?php 
		$root = realpath($_SERVER["DOCUMENT_ROOT"]);
		include "$root/infermath/statics.php";
		 
	?>
</head>

<body>
	<div class="container">
		<?php include "$root/infermath/header.php";	?>
		<div class="row">
		
			<div class="col-lg-6">
				<h2>Probability in R: Discrete Random Variables</h2>
				<ol>
					<li><a href="../bernoulli" class="videolink">Bernoulli distribution (2 tutorials)</a>
					<li>Binomial distribution (3 tutorials)
					<li><a href="../geometric" class="videolink">Geometric distribution (3 tutorials)</a>
					<li><a href="../borel-cantelli" class="videolink">Borel-Cantelli lemma (4 tutorials)</a>
				</ol>
			</div>
			
			<div class="col-lg-6">
				<h2>Binomial distribution</h2>
				Binomial distribution is an extension of Bernoulli ditribution.
				It models the number of successful trials in a multiple Bernoulli.
			</div>
			
			<div class="col-lg-6">
				<iframe  src="https://www.youtube.com/embed/6uS4CYTnaB0" frameborder="0" allowfullscreen></iframe>
			</div>
			
			<div class="col-lg-6">
				<h3>Part 1</h3>
				We define binomial distribution and generate it using R. We familiarize ourselves with histogram in R.
				<br/>R commands and functions:
				<ul>
					<li>hist(v) - represents data from vector v in a histogram
					<li>rbinom(n,m,p) - generates n draws from binomial distribution distribution with parameters m and p
				</ul>
			</div>

			<div class="col-lg-6">
				<iframe  src="https://www.youtube.com/embed/9hZ5voL-RuE" frameborder="0" allowfullscreen></iframe>
			</div>
			
			<div class="col-lg-6">
				<h3>Part 2</h3>
				In this episode we derive the probability of each outcome in binomial distribution. 
				We show the probabilities add up to 1 using set theory, polynomials and Pascal's triangle.
				<br/>Mathematical formulas:<br/>
				<img src="../img/binomial.png" class="formula" img="Binomial coefficient"/>
			</div>
			
			<div class="col-lg-6">
				<iframe  src="https://www.youtube.com/embed/AqamWKkoV7E" frameborder="0" allowfullscreen></iframe>
			</div>
			
			<div class="col-lg-6">
				<h3>Part 3</h3>
					In this video we are comparing the probability distribution of binomial random variables to simulation in R. We learn how to generate vectors and matrices, use the for loop and bar plot in R.
				<br/>R commands and functions:
				<ul>
					<li>1:n - generates a vector of n integers
					<li>matrix(nrow=n,ncol=m) - generates empty matrix of n rows and m columns
					<li>for(i in v){do} - repeats do command for i taking all the values from vector v  
				</ul>
			</div>
		</div>
	</div>
</body>
</html>
