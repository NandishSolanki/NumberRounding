# Number Rounding [![Build Status](https://travis-ci.org/NandishSolanki/NumberRounding.svg?branch=master)](https://travis-ci.org/NandishSolanki/NumberRounding)

## Install
``` npm install --save number-rounding```

## Import
``` var nr = require('number-rounding'); ``` 
<br/> or <br/>
``` import nr from 'number-rounding'; ```

## Use

>  ### Round
  nr.round(number, noOfDecimalPlaces); <br/>
  ``` 
  nr.round(2.5); => 3
  nr.round(2.5, 0); => 3
  nr.round(-2.576, 2); => -2.58
  ```
>  ### Round Up
  nr.roundUp(number, noOfDecimalPlaces); <br/>
  
>  ### Round Down
  nr.roundDown(number, noOfDecimalPlaces); <br/>
  
>  ### Round Half Up
  nr.roundHalfUp(number, noOfDecimalPlaces); <br/>
  
>  ### Round Half Down
  nr.roundHalfDown(number, noOfDecimalPlaces); <br/>

>  ### Round Half Even
  nr.roundHalfEven(number, noOfDecimalPlaces); <br/>
  
>  ### Round Half Odd
  nr.roundHalfOdd(number, noOfDecimalPlaces); <br/>
  
 | Value | Round | Round Half Up | Round Half Down | Round Up | Round Down | Round Half Even | Round Half Odd |
 |-----|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|
 |1.7|2|2|2|2|1|2|2|
 |1.5|2|2|1|2|1|2|1|
 |1.1|1|1|1|2|1|1|1|
 |0.7|1|1|1|1|0|1|1|
 |0.5|1|1|0|1|0|0|1|
 |0.1|0|0|0|1|0|0|0|
 |-0.1|0|0|0|0|-1|0|0|
 |-0.5|0|0|-1|0|-1|0|-1|
 |-0.7|-1|-1|-1|0|-1|0|-1|
 |-1.1|-1|-1|-1|-1|-2|-1|-1|
 |-1.5|-1|-1|-2|-1|-2|-2|-1|
 |-1.7|-2|-2|-2|-1|-2|-2|-2|
 
