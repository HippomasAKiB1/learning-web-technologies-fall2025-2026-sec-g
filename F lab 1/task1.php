<?php

//task 1
$length = 10;
$width = 5;

$area = $length * $width;
$perimeter = 2 * ($length + $width);

echo "Length: $length, Width: $width <br>";
echo "Area = $area <br>";
echo "Perimeter = $perimeter <br><br>";


//task 2

$amount = 1000;
$vat = $amount * 0.15;

echo "Amount: $amount <br>";
echo "VAT (15%) = $vat <br><br>";




//task3
$num = 17;

if ($num % 2 == 0)
    echo "$num is Even<br><br>";
else
    echo "$num is Odd<br><br>";



//task 4

$a = 10; $b = 25; $c = 18;

if ($a >= $b && $a >= $c)
    echo "Largest = $a<br><br>";
elseif ($b >= $a && $b >= $c)
    echo "Largest = $b<br><br>";
else
    echo "Largest = $c<br><br>";


//task 5

for ($i = 10; $i <= 100; $i++) {
    if ($i % 2 != 0) {
        echo "$i ";
    }
}
echo "<br><br>";


//task 6

$arr = [5, 12, 8, 30, 22];
$search = 30;
$found = false;

foreach ($arr as $item) {
    if ($item == $search) {
        $found = true;
        break;
    }
}

if ($found)
    echo "$search found in array<br><br>";
else
    echo "$search not found<br><br>";


//task 7


for($i=0; $i<4; $i++){
    for($j=0; $j<$i ; $j++)
    {
        echo"*";
    }
    echo "<br>";

    }

    $flag=1;
for($i=3; $i>0; $i--){
    for($j=$i; $j>0 ; $j--){
        echo"$flag";
        $flag++;
    }
    $flag=1;
    echo "<br>";

    }




$stds = ["A", "B", "C", "D", "E", "F"];
$index = 0;

for ($i = 1; $i <= 3; $i++) { 
    for ($j = 1; $j <= $i; $j++) { 
        echo "{$stds[$index]} ";  
        $index++;
    }
    echo "<br>";  
}





//task 8 


// Pattern 1
echo "<br>Pattern 1:<br>";

$nums = "123";  
$letters = "A"; 
$spaces = 0;  
for ($i = 3; $i >= 1; $i--) {
  
    echo str_repeat(" ", $spaces);  

  
    echo substr($nums, 0, $i);  

    
    for ($j = 0; $j < 4 - $i; $j++) {
        echo chr(ord($letters) + $j);  
    }

   
    $spaces += 3;  
    echo "<br>";  

}


echo "<br>Done.";
?>