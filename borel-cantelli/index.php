<!DOCTYPE HTML>
<html>
<head>
	<meta charset="utf-8"/>
	<title>Probability in R: Borel-Cantelli lemma | Infermath</title>
	<meta name="description" content="User defined function is used in for loop to generate series of Bernoulli trials. What does it mean for a series of events to happen infinitely many times?"/>
	<meta name="keywords" content="function r, borel-cantelli lemma, print r, flush console r, sys.sleep, quantifier, sum of events, intersection of events, runif, for all "/>
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
					<li><a href="../bernoulli" class="videolink">Bernoulli distribution (2 tutorials)</a>
					<li><a href="../binomial" class="videolink">Binomial distribution (3 tutorials)</a>
					<li><a href="../geometric" class="videolink">Geometric distribution (3 tutorials)</a>
					<li>Borel-Cantelli lemma (4 tutorials)
				</ol>
			</div>
			
			<div class="col-lg-6">
				<h2>Borel-Cantelli lemma</h2>
				Borel-Cantelli lemma describes the behaviour of infinite series of Bernoulli trials.
				It specifies under which conditions certain events keep on happening.
			</div>
			
			<div class="col-lg-6">
				<iframe width="560" height="315" src="https://www.youtube.com/embed/zHQ_kqYkK1o" frameborder="0" allowfullscreen></iframe>
			</div>
			
			<div class="col-lg-6">
				<h3>Part 1</h3>
					We create a function in R returning a result of Bernoulli trial and we use it in for loop to generate series of trials. 
					We try to understand what does it mean for a series of events to happen infinitely many times.
				<br/>R commands and functions:
				<ul>
					<li>f=function(x){return(x*x)} - function syntax in R, f(3) returns square of 3 
					<li>print(x) - prints value of x in console
					<li>flush.console() - forces output display
					<li>Sys.sleep(x) - holds execution for x sec
				</ul>
			</div>

			<div class="col-lg-6">
				<iframe width="560" height="315" src="https://www.youtube.com/embed/p7dN3jIOXQI" frameborder="0" allowfullscreen></iframe>
			</div>
			
			<div class="col-lg-6">
				<h3>Part 2</h3>
				We derive probability distribution of the Borel-Cantelli random variables and learn about Borel-Cantelli series.
				We encounter cumulative distribution function
				<br/>Mathematical formulas:<br/>
				<img src="../img/borel1.png" class="formula" alt="Borel-Cantelli series"/>
			</div>
			
			<div class="col-lg-6">
				<iframe width="560" height="315" src="https://www.youtube.com/embed/sfATJGELc0A" frameborder="0" allowfullscreen></iframe>
			</div>
			
			<div class="col-lg-6">
				<h3>Part 3</h3>
				We prove the second part of Borel-Cantelli lemma.
				We come across exponential function, complementary events, a monkey and William Shakespeare.
				<br/>Borel - Cantelli lemma part 2: <br/>
				<img src="../img/borel2.png" class="formula" alt="Borel-Cantelli part 2"/>
			</div>
			
			<div class="col-lg-6">
				<iframe width="560" height="315" src="https://www.youtube.com/embed/GlcpJ8VgGgQ" frameborder="0" allowfullscreen></iframe>
			</div>
			
			<div class="col-lg-6">
				<h3>Part 4</h3>
					In the last episode of discrete random variables we use Borel-Cantelli lemma to generate infinite series of successful Bernoulli trials. As we approach infinity we turn to philosophy and music.
				<br/>R commands and functions:
				<ul>
					<li>.Machine$integer.max - returns maximal number od type integer
					<li>sqrt(x) - square root of x
					<li>if(bool){do} - executes do command if bool logical condition is TRUE
				</ul>
			</div>
		</div>
	</div>
</body>
</html>
