<!DOCTYPE HTML>
<html>
<head>
	<meta charset="utf-8"/>
	<title>Probability in R: Geometric Distribution | Infermath</title>
	<meta name="description" content="Geometric random variable is defined as number of unsuccessful Bernoulli trials before the first successful trial. While loop is used to generate it in R."/>
	<meta name="keywords" content="programming, rgeom, while loop r, scientific notation, histogram r, iid, increment index, true false, logical condition, hist"/>
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
					<li>Geometric distribution (3 tutorials)
					<li><a href="../borel-cantelli" class="videolink">Borel-Cantelli lemma (4 tutorials)</a>
				</ol>
			</div>
			
			<div class="col-lg-6">
				<h2>Geometric distribution</h2>
				Binomial distribution is an extension of Bernoulli ditribution.
				It models the first successful trial in a multiple Bernoulli.
			</div>
			
			<div class="col-lg-6">
				<iframe width="560" height="315" src="https://www.youtube.com/embed/k3N0twVPyew" frameborder="0" allowfullscreen></iframe>
			</div>
			
			<div class="col-lg-6">
				<h3>Part 1</h3>
					We define geometric distribution and draw random variables from it in R. We familiarize ourselves with while loop and scientific notation.
				<br/>R commands and functions:
				<ul>
					<li>while(bool){do} - repeats do command while bool logical condition is TRUE
					<li>rgeom(n,p) - generates n draws from geometric distribution with parameter p
					<li>1+e6 - short notation for 10 to power 6  
				</ul>
			</div>

			<div class="col-lg-6">
				<iframe width="560" height="315" src="https://www.youtube.com/embed/74kUoqGgA1s" frameborder="0" allowfullscreen></iframe>
			</div>
			
			<div class="col-lg-6">
				<h3>Part 2</h3>
				We derive probability distribution of the geometric random variables and learn about geometric series. We encounter cumulative distribution function
				<br/>Mathematical formulas:<br/>
				<img src="../img/geometric.png" class="formula" alt="Geometric series"/>
			</div>
			
			<div class="col-lg-6">
				<iframe width="560" height="315" src="https://www.youtube.com/embed/1mbAPlILTfQ" frameborder="0" allowfullscreen></iframe>
			</div>
			
			<div class="col-lg-6">
				<h3>Part 3</h3>
					We want to increase to infinity the maximum value coming from geometric distribution. On our way we encounter NAs and machine epsilon but don't give up.
				<br/>R commands and functions:
				<ul>
					<li>max(v) - returns maximal element in data set v
					<li>na.rm=TRUE - optional function argument making it ignore NA values
					<li>.Machine$Double.eps - returns lowest in absolute value number of type double
				</ul>
			</div>
			
		</div>
	</div>
</body>
</html>
