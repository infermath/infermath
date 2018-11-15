<!DOCTYPE HTML>
<html>
<head>
	<meta charset="utf-8"/>
	<title>Probability in R: Bernoulli ditribution | Infermath</title>
	<meta name="description" content="An overview of discrete probability distributions and methods of generating them in R. Introduction to R language and numerical analysis."/>
	<meta name="keywords" content="r programming, r language, r statistics, random variable, probability distribution, probability and statistics, discrete random variable, random variables and probability distributions, numerical methods, numerical analysis"/>
	<meta hhtp-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
	<?php 
		$root = realpath($_SERVER["DOCUMENT_ROOT"]);
		include "$root/infermath/statics.php";
		include_once("$root/infermath/analyticstracking.php") 
	?>
</head>

<body>
	<div class="container">
		<?php include "$root/infermath/header.php";	?>
		<div class="row">
			<div class="col-lg-6">
				<h2>Probability in R: Discrete Random Variables</h2>
				<ol>
					<li>Bernoulli distribution (2 tutorials)
					<li><a href="../binomial" class="videolink">Binomial distribution (3 tutorials)</a>
					<li><a href="../geometric" class="videolink">Geometric distribution (3 tutorials)</a>
					<li><a href="../borel-cantelli" class="videolink">Borel-Cantelli lemma (4 tutorials)</a>
				</ol>
			</div>
			
			<div class="col-lg-6">
				<h2>Bernoulli distribution</h2>
				It is a course that links mathematical theory with programming application. 
				Discrete Random Variables series gives overview of the most important discrete probability distributions 
				together with methods of generating them in R and basics of numerical methods.
			</div>
			
			<div class="col-lg-6">
				<iframe width="560" height="315" src="https://www.youtube.com/embed/6ohXiWukQhA" frameborder="0" allowfullscreen></iframe>
			</div>
			
			<div class="col-lg-6">
				<h3>Part 1</h3>
				<a href="https://cran.r-project.org/bin/windows/base/" class="videolink" target="_blank">Download R </a>
				<br/>R commands and functions:
				<ul>
					<li># - comments out code
					<li>runif(n) - generates n draws from standard uniform distribution
					<li>round(x) - rounds x to the nearest integer
					<li>sum(v) - sums elements of vector v
					<li>mean(v) - averages elements of vector v
					<li>v [ i : j ] - looks at elements from vector v indexed from i to j
				</ul>
			</div>
			
			<div class="col-lg-6">
				<iframe width="560" height="315" src="https://www.youtube.com/embed/FmlvQtY9xxM" frameborder="0" allowfullscreen></iframe>
			</div>
			
			<div class="col-lg-6">
				<h3>Part 2</h3>
				In this video we generate a Bernoulli random variables using R. We familiarize ourselves with boolean variables and logical conditions in R. 
				<br/>R commands and functions:
				<ul>
					<li>a &lt b - returns TRUE if a is less than b and FALSE otherwise
					<li>rbinom(n,1,p) - generates n draws from bernoulli distribution distribution with parameter p
				</ul>
			</div>
		</div>
	</div>
</body>
</html>
