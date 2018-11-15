const riskLevels = [{
        'lowerBound': 0,
        'class': 'green',
        'color': '#00A857',
        'description': 'Małe'
    }, {
        'lowerBound': 1,
        'class': 'orange',
        'color': '#F89521',
        'description': 'Umiarkowane'
    }, {
        'lowerBound': 5,
        'class': 'red1',
        'color': '#EA2830',
        'description': 'Duże'
    }, {
        'lowerBound': 10,
        'class': 'red2',
        'color': '#9E1C20',
        'description': 'Bardzo duże'
}];
const ageGroups = [{
        'lowerBound':0,
        'Male':1,
        'Female':0
    },{
        'lowerBound':40,
        'Male':1,
        'Female':0
    },{
        'lowerBound':50,
        'Male':2,
        'Female':1
    },{
        'lowerBound':55,
        'Male':2,
        'Female':1
    },{
        'lowerBound':60,
        'Male':4,
        'Female':2
    },{
        'lowerBound':65,
        'Male':6,
        'Female':3
    },{
        'lowerBound':70,
        'Male':10,
        'Female':6
}];
const bmiLevels = [{
        'description': 'wygłodzenie',
        'lowerBound': 0,
        'class': 'blue3',
    }, {
        'description': 'wychudzenie',
        'lowerBound': 16,
        'class': 'blue2',

    }, {
        'description': 'niedowaga',
        'lowerBound': 17,
        'class': 'blue1',

    }, {
        'description': 'wartość prawidłowa',
        'lowerBound': 18.5,
        'class': 'green',

    }, {
        'description': 'nadwaga',
        'lowerBound': 25,
        'class': 'orange',

    }, {
        'description': 'otyłość stopnia I',
        'lowerBound': 30,
        'class': 'red1',

    }, {
        'description': 'otyłość stopnia II',
        'lowerBound': 35,
        'class': 'red2',

    }, {
        'description': 'otyłość skrajna',
        'lowerBound': 40,
        'class': 'red3'
}];

const cholesterolLevels = [{
        'lowerBound': 0,
        'class': 'blue1',
        'description': 'za niski',
        'comment': 'Skontaktuj się z lekarzem'
    }, {
        'lowerBound': 120,
        'class': 'green',
    }, {
        'lowerBound': 190,
        'class': 'red1',
        'description': 'wysoki',
        'comment': 'Wskazany kontakt z lekarzem'
    }, {
        'lowerBound': 330,
        'class': 'red2',
        'description': 'bardzo wysoki',
        'comment': 'Skontaktuj się z lekarzem'
    }, {
        'lowerBound': undefined,
        'class': 'red1'
}];

const pressureLevels = [{
        'lowerBound': 0,
        'class': 'blue1',
        'description': 'za niskie',
        'comment':'Skontaktuj się z lekarzem'
    }, {
        'lowerBound': 90,
        'class': 'green',
    }, {
        'lowerBound': 140,
        'class': 'orange',
        'description': 'podwyższone',
        'comment':''
    }, {
        'lowerBound': 160,
        'class': 'red1',
        'description': 'wysokie',
        'comment':'Wskazany kontakt z lekarzem',
    }, {
        'lowerBound': 180,
        'class': 'red2',
        'description': 'bardzo wysokie',
        'comment':'Pilnie skontaktuj się z lekarzem!'
}];

const smokingLevels = [{
        'lowerBound': 'No',
        'value': 'Nie',
        'class': 'green',
    }, {
        'lowerBound': 'Yes',
        'value': 'Tak',
        'class': 'red2',
}];

const right_levels = {
    "smoking": {"smoking": "No"},
    "pressure": {"pressure": 120},
    "cholesterol": {"knowscholesterol": "Yes", "cholesterol": 4}
};

const baseUrl = 'https://algocardio.pl';
// const baseUrl = 'http://localhost:8000';

var ctx = document.getElementById("myChart2");
var myChart2 = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ['Risk Level'],
        datasets: [
            {
                label: 'Małe',
                data: [1],
                backgroundColor: '#00A857',
            },
            {
                label: 'Umiarkowane',
                data: [4],
                backgroundColor: '#F89521',
            },
            {
                label: 'Duże',
                data: [5],
                backgroundColor: '#EA2830',
            },
            {
                label: 'Bardzo duże',
                data: [10],
                backgroundColor: '#9E1C20',
            }
        ]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                stacked: true,
                ticks: {
                    fontSize: 32
                }
            }],
            yAxes: [{
                stacked: true,
                barThickness: 50,
                ticks: {
                    display: false
                }
            }]
        },
        legend: {
            position: 'bottom',
            labels: {
                fontSize: 28
            }
        }
    }
});

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [65, 70],
        datasets: [{
            label: 'Twoje ryzyko',
            fill: '+2',
            borderColor: '#9E1C20',
            borderWidth: 5
        }, {
            label: 'Twoje obniżone ryzyko',
            fill: '+2',
            borderColor: '#00A857',
            borderWidth: 5
        }, {
            label: 'Minimalne ryzyko',
            fill: false,
            borderColor: '#9E1C20',
            borderWidth: 5
        }, {
            label: 'Obniżone minimalne ryzyko',
            fill: false,
            borderColor: '#00A857',
            borderWidth: 5
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    fontSize: 32,
                    suggestedMax: 20
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Ryzyko (%)',
                    fontSize: 32
                }
            }],
            xAxes: [{
                ticks: {
                    fontSize: 32
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Wiek',
                    fontSize: 32
                }
            }]
        },
        legend: {
            display: false,
            position: 'bottom',
            labels: {
                fontSize: 28
            }
        }
    }
});

let params = {};

function Params(params) {
    this.params = params
}

Params.prototype.get = function (param) {
    let value= checkParam(this.params,param);

    if (param === 'cholesterol' && this.check('cholesterolunit', 'mmol/l')) {
        value *= 38.7;
        value = parseFloat(value.toFixed(2));
    }
    return value;
};

Params.prototype.check = function (name, value) {
    let element =  $.grep(this.params, function(e){ return e.name == name; });
    return element[0].value === value;
};

Params.prototype.push = function (object) {
    return this.params.push(object);
};

function replaceBasedOnDropdown(dropDown, defaultValue, callbackIf, callbackElse) {
    dropDown.val(defaultValue);
    dropDown.change(function () {
        let thisValue = $(this).val();
        if (thisValue === defaultValue) {
            callbackIf();
        } else {
            callbackElse();
        }
    })
}

// function checkParam(param, name) {
//     let element = param.find(e => e.name === name);
//     return element.value;
// }

function checkParam(param, name) {
    let element =  $.grep(param, function(e){ return e.name == name; });
    return element[0].value;
}

function changeParam(param, name, value) {
    for(var i in param){
        if(param[i].name===name){
            param[i].value = value;
        }
    }
}

function checkIfSick() {
    var veryHigh = false;
    var High = false;
    var sick = 0;
    
    let highCholesterol = params.check('knowscholesterol',"Yes") && params.get('cholesterol') >= 310;
    let hardDiabetes = params.check('hasdiabetes',"Yes") && (
        params.check('harddiabetes',"Yes") ||
        params.check('smoking',"Yes") ||
        params.get('pressure') >= 180 ||
        highCholesterol
    );

    params.check('cardiac',"Yes") ? veryHigh = true : $('#cardiac_high_risk').hide();
    hardDiabetes ? veryHigh = true : $('#diabetes_high_risk').hide();
    params.check('haskidneys',"Yes") && params.check('hardkidneys',"high") ? veryHigh = true : $('#kidney_high_risk').hide();

    params.get('pressure') >= 180 ? High = true : $('#pressure_high_risk').hide();
    params.get('pressure2') >= 110 ? High = true : $('#pressure2_high_risk').hide();
    highCholesterol ? High = true : $('#cholesterol_high_risk').hide();
    params.check('hasdiabetes',"Yes") && !hardDiabetes ? High = true : $('#diabetes_risk').hide();
    params.check('haskidneys',"Yes") && params.check('hardkidneys',"moderate") ? High = true : $('#kidney_risk').hide();

    veryHigh ? sick = 3 : High ? sick = 2 : $('#high_risk_div').hide();
    return sick
}

function checkOtherFactors(){
    const otherFactors = {
        "family" :"przedwczesna choroba układu sercowo-naczyniowego u krewnych I stopnia",
        "familipid":"hypercholestetolemia rodzinna",
        "immune" :"choroby autoimmunologiczne i zapalne",
        "obesity" :"otyłość brzuszna",
        "przerost" :"przerost mięśnia lewej komory serca",
        "migotanie" :"migotanie przedsionków",
        "psycho" :"poważne choroby psychiczne",
        "lipid" :"zaburzenia lipidowe",
        "biochem":"zaburzenia biochemiczne",
        "sitting" :"siedzący tryb życia",
        "snoring" :"bezdech senny",
        "hiv":"HIV",
    };

    for (let afactor in otherFactors){
        if(document.getElementById(afactor).checked){
            $('#factors_risk').show();
            $('#diseases_list').append($("<li>").text(otherFactors[afactor]));
        }
    }
}

function setAgeMessage(age) {
    switch (true) {
        case (age < 40):
            $('#young_message').show();
            $('#young_score_message').show();
            $('#heart_age_message').hide();
            $('#heart_age_div').hide();
            $('#score_age').hide();
            $('#young_age').show();
            break;
        case (age < 76):
            $('#base_message').show();
            $('#score_message').show();
            break;
        default:
            $('#old_message').show();
            $('#old_score_message').show();
            $('#heart_age_message').hide();
            $('#heart_age_div').hide();
            $('#graph_div').hide();
    }
}

function createRiskButtons(){
    let counter = 0;
    params.check('smoking',"No") ? $("#id_div_smoking").hide() : counter++;
    params.get('pressure') < 140 ? $("#id_div_pressure").hide() : counter++;
    params.check('knowscholesterol','Yes') && params.get('cholesterol') < 190 ? $("#id_div_cholesterol").hide() : counter++;

    if(counter===0){
        $("#graph_comment").hide();
        // $("#congratulations").show();
    } else {
        $('.risk_div').addClass("col-md-"+Math.round(12/counter));
    }
}

function createTargetButtons(age) {

    let weight = params.get('weight');
    let height = params.get('height'); 
    let bmi = weight / height / height * 10000;
    bmi = parseFloat(bmi.toFixed(2));
    params.push({
        name: 'bmi',
        value: bmi
    });
    $('#right_weight_low').html(Math.round(18.5 * height * height / 10000));
    $('#right_weight_high').html(Math.round(25 * height * height / 10000));
    
    let male = params.check('gender','Male');
    male ? $('.female').hide() : $('.male').hide();
    let ageGroup = getLevel(age, ageGroups);
    let optimalRisk = male ? ageGroup.Male : ageGroup.Female;
    let ageLevel = getLevel(optimalRisk, riskLevels);
    $('#optimal_risk').html(ageLevel.description.fontcolor(ageLevel.color));
    let smokingLevel = getLevel(params.get('smoking'), smokingLevels);
    let maxPressure = Math.max(params.get('pressure'),params.get('pressure2')*2-40);
    let pressureLevel = getLevel(maxPressure, pressureLevels);
    if (params.get('pressure') >= 140 || params.get('pressure2') >= 90){
        $('#hypertension').show();
        age < 65 ? $('#pressure_target1').show() : $('#pressure_target2').show();
    }

    let cholesterol = (params.check('knowscholesterol', 'Yes')) ? params.get('cholesterol') : undefined;
    let cholesterolLevel = getLevel(cholesterol, cholesterolLevels);
    let bmiLevel = getLevel(bmi, bmiLevels);

    cholesterol = cholesterol !== undefined ? cholesterol + ' mg/dl' : '? mg/dl';

    setButtonAttr('age', ageCB, ageLevel.class, (male ? "Mężczyzna" : "Kobieta")+ " <br/>Wiek", age+(age % 10 === 2 || age % 10 === 3 ? " lata":" lat"));
    setButtonAttr('smoking', smokingCB, smokingLevel.class, 'Palenie');
    setButtonAttr('pressure', pressureCB, pressureLevel.class, 'Ciśnienie', params.get('pressure') + '/' + params.get('pressure2'), pressureLevel.description);
    setButtonAttr('cholesterol', cholesterolCB, cholesterolLevel.class, 'Cholesterol', cholesterol, cholesterolLevel.description);
    setButtonAttr('bmi', bmiCB, bmiLevel.class, 'BMI', bmi, bmiLevel.description);
    setButtonAttr('food', foodCB, 'red1');
    setButtonAttr('activity', activityCB, 'red1');
}

function refreshTarget(target) {
    ['instruction', 'age', 'smoking', 'pressure', 'cholesterol', 'bmi', 'food', 'activity']
        .forEach(function(e){$("#target_" + e).hide()});
    target.fadeIn('fast');
}

function ageCB() {refreshTarget($('#target_age'));}
function smokingCB() {refreshTarget($('#target_smoking'));}
function pressureCB() {refreshTarget($('#target_pressure'));}
function cholesterolCB() {refreshTarget($('#target_cholesterol'));}
function bmiCB() {refreshTarget($('#target_bmi'))}
function foodCB() {refreshTarget($('#target_food'));}
function activityCB() {refreshTarget($('#target_activity'));}

function getLevel(value, levels) {
    return levels
        .filter(function(level){return level.lowerBound <= value || level.lowerBound === value})
        // .filter(level => level.lowerBound <= value || level.lowerBound === value)
        .reduce(function(max, level) {return max.lowerBound > level.lowerBound ? max : level}, levels[0]);
        // .reduce((max, level) => max.lowerBound > level.lowerBound ? max : level, levels[0]);
}

function setButtonAttr(select, callback, classname, name, value, description) {
    var selector = $('#'+select+'_button');
    var selector2 = $('#'+select+'_header');

    selector.addClass(classname+" square");
    selector2.attr({'class': classname+'text',});

    if (callback !== undefined) {
        selector.click(callback);
    }
    if (name === 'Palenie') {
        if(classname==='green') {
            selector.html('Nie palisz');
            selector2.html('Nie palisz');
        } else {
            selector.html('Palisz');
            selector2.html('Palisz');
        }
        return;
    }
    if (name !== undefined) {
        selector.html(name + ": " + value);
        selector2.html(name + ": " + value);
    }
    if (description !== undefined) {
        selector.html(selector.html() + ' (' + description + ')');
        selector2.html(selector2.html() + ' (' + description + ')');
    }
}

function setLipidProfileRecommendation() {
    if (
        params.check('cardiac', 'Yes') ||
        params.check('hasdiabetes', 'Yes') ||
        params.check('smoking', 'Yes') ||
        params.get('pressure') > 180 ||
        params.get('pressure2') > 110 ||
        params.get('bmi') >= 30 ||
        params.check('haskidneys', 'Yes') ||
        (params.get('age') >= 40 && params.check('gender', 'Male')) ||
        (params.get('age') >= 50 && params.check('gender', 'Female')) ||
        document.getElementById('immune').checked ||
        document.getElementById('family').checked ||
        document.getElementById('familipid').checked ||
        document.getElementById('obesity').checked
    ) {
        $('#lipid_profile').show();
        $('#lipid_profile2').show();
    }
}

function getSickSCORE(url, sick) {
    $.getJSON(url + $.param(window.params), function (json) {
        let scoreLevel = getLevel(json[0]['risk'], riskLevels);
        let scoreRisk = riskLevels.indexOf(scoreLevel);
        if(scoreRisk===3){$('#score_high_risk').show();}
        if(scoreRisk===2){$('#score_risk').show();}
        let maxRisk = Math.max(scoreRisk, sick);
        checkMaxRisk(maxRisk);
        let message = riskLevels[maxRisk].description.fontcolor(riskLevels[maxRisk].color);
        let location = $('#id_primary_message');
        location.html(message);
    })
    .fail(function () {
        alert("Nie udało się uzyskać wyniku ryzyka. Uaktualnij wersję przeglądarki i spróbuj ponownie.")
    });
}

function getSCORE(url, primary, i) {
    $.getJSON(url + $.param(window.params), function (json) {
        const risk = {
            lower: json[0]['risk'],
            upper: json[json.length - 1]['risk']
        };
        if(i==0){
            let location = primary ?  $('#id_primary_message') : $('#id_secondary_message');
            let message = getMessage(risk);
            if (!primary){ message = "Ryzyko wynosiłoby:<br/>"+message;}
            location.html(message);
            if(primary) {
                let scoreLevel = getLevel(risk.lower, riskLevels);
                let scoreRisk = riskLevels.indexOf(scoreLevel);
                checkMaxRisk(scoreRisk);
                risk.lower === risk.upper ? heartAge(risk.lower) : $('#heart_age_div').hide();
            }
        }
        if (primary) {
            myChart.data.datasets[0].data[i] = json[json.length - 1]['risk'];
            myChart.data.datasets[2].data[i] = json[0]['risk'];
        }
        myChart.data.datasets[1].data[i] = json[json.length - 1]['risk'];
        myChart.data.datasets[3].data[i] = json[0]['risk'];

        myChart.update();
    })
    .fail(function () {
        if(i==0) {
            alert("Nie udało się uzyskać wyniku ryzyka. Uaktualnij wersję przeglądarki i spróbuj ponownie.")
            $('#forecast_div').hide();
        }
    });
}

function checkMaxRisk(maxRisk){
    if (maxRisk>=2){
        $('#cholesterol_target'+maxRisk).show();
        $('#frequent_recheck').show();
        $('#high_risk_recommendation').show();
    } else {
        $('#cholesterol_target1').show();
        $('#normal_recheck').show();
    }
}

function heartAge(risk){
    let age = params.get("age");
    let heartage=age;
    let message = heartage+(heartage % 10 === 2 || heartage % 10 === 3 ? " lata":" lat");
    let difference=0;
    let optimalRisk = ageGroups.filter(function(group){return (params.check('gender', 'Male') ? group.Male : group.Female) >= risk});

    if(optimalRisk.length == 0){
        message = "ponad 75 lat";
        difference = 15;
    } else {
        let i = ageGroups.indexOf(optimalRisk[0]);
        if(i>0){
            if (params.check('gender', 'Male')) {
                heartage = (risk - ageGroups[i - 1].Male) / (ageGroups[i].Male - ageGroups[i - 1].Male);
            } else{
                heartage = (risk - ageGroups[i - 1].Female) / (ageGroups[i].Female - ageGroups[i - 1].Female);
            }
            heartage = heartage * (ageGroups[i].lowerBound - ageGroups[i - 1].lowerBound) + ageGroups[i - 1].lowerBound;
            message = heartage+(heartage % 10 === 2 || heartage % 10 === 3 ? " lata":" lat");
            difference = heartage - age;
        }
    }
    let level = getLevel(difference, riskLevels);
    message = message.fontcolor(level.color);
    $('#heart_age').html(message);
    message = "Wiek serca: "+message;
    $('.heart_age_message').html(message);
}

function getMessage(risk) {
    var level = {
        "lower": getLevel(risk['lower'],riskLevels),
        "upper": getLevel(risk['upper'],riskLevels)};
    var message = "";

    if (risk.lower !== risk.upper) {message = "od "+ risk.lower+'% ('+level.lower.description.fontcolor(level.lower.color)+') do ';}
    message = message + risk.upper + '% ('+level.upper.description.fontcolor(level.upper.color) + ')';

    return message;
}

$(document).ready(function () {
    (function pulse(back) {
        $('#id_heart').animate(
            {
                opacity: (back) ? 1 : 0.5
            }, 700, function () {
                pulse(!back)
            });
    })(false);
});

$(document).on("keypress", "form", function (event) {
    return event.keyCode != 13;
});

$(document).ready(function () {
    const knowsDropdown = $('#knows_cholesterol');
    const unitDropdown = $('#id_cholesterolunit');
    const againButton = $('#id_again');
    const cholInput = $('#id_cholesterol');
    const formSection = $('#form_section');
    const messageSection = $('#message');
    let pressureLow = document.getElementById("id_pressure2");
    let pressureHigh = document.getElementById("id_pressure");

    const url = baseUrl +  '/rest/?';

    const inputs = ["gender", "age", "weight", "height", "smoking", "pressure", "cholesterol", "cardiac", "diabetes", "kidneys", "factors"];

    var counter = 0;
    var activeinput = 0;

    let nextTabClick = {
        time: new Date().getSeconds()
    };
    let prevTabClick = {
        time: new Date().getSeconds()
    };
    let form = {
        proceed: true
    };

    $('#cookies').fadeIn('fast');
    $('#id_close_cookies').click(function () { $('#cookies').fadeOut('slow');});

    $('.score_button').click(function () { $('#score').fadeIn('fast');});
    $('#id_close_score').click(function () {$('#score').fadeOut('slow');});

    $(window).click(function (e) {
        const modal = document.getElementById('score');
        if (e.target == modal) {
            $('#score').fadeOut('slow');
        }
    });

    $('.popup').click(function(){
        var popup = document.getElementById("dymek_"+this.id);
        popup.classList.toggle("show");
    });

    $('button#id_start').click(function () {
        $('button#id_start').fadeOut('slow');
        $('#div_privacy').fadeOut('slow', function () {
            $('#div_gender').fadeIn('slow');
            $('button#id_back').fadeIn('slow').css("display","inline-block");
            $('button#id_next').fadeIn('slow').css("display","inline-block");
        });
    });

    let prevTabClickHandler = function () {
        if (activeinput == inputs.length - 1) {
            $('button#id_check').fadeOut('slow', function () {
                $('button#id_next').fadeIn('slow');
            });
        }
        if (activeinput == 0) {
            $('button#id_back').fadeOut('slow');
            $('button#id_next').fadeOut('slow');
            $('#div_gender').fadeOut('slow', function () {
                $('#div_privacy').fadeIn('slow');
                $('button#id_start').fadeIn('slow');
            });
        } else {
            activeinput--;
            $('#div_' + inputs[activeinput + 1]).fadeOut('slow', function () {
                $('#div_' + inputs[activeinput]).fadeIn('slow');
            });
        }
    };

    let nextTabClickHandler = function () {
        form.proceed = true;
        var e = document.getElementById("id_" + inputs[activeinput]);
        e.setCustomValidity('');

        if (e.checkValidity()) {

            if (inputs[activeinput] === "pressure") {
                pressureLow.setCustomValidity('');
                if (pressureLow.checkValidity() && (parseInt(pressureLow.value) < parseInt(pressureHigh.value))) {
                    let levelHigh = getLevel(pressureHigh.value, pressureLevels);
                    let levelLow = getLevel(pressureLow.value*2-40, pressureLevels);
                    if(levelHigh.class !== "green"){
                        let alertHigh = "Twoje ciśnienie skurczowe: " + pressureHigh.value+ " jest " + levelHigh.description+". "+levelHigh.comment;
                        alert(alertHigh);
                        $("#pressure_risk").html(alertHigh+"<br/>");
                    }
                    if(levelLow.class !== "green"){
                        let alertLow = "Twoje ciśnienie rozkurczowe: " + pressureLow.value + " jest " + levelLow.description+". "+levelLow.comment;
                        alert(alertLow);
                        $("#pressure_risk2").html(alertLow+"<br/>");
                    }
                    if (pressureHigh.value < 90 || pressureLow.value < 50) {
                        form.proceed = false;
                    }
                } else {
                    form.proceed = false;
                    if (pressureLow.value === "") {
                        pressureLow.setCustomValidity("Podaj wartość");
                    } else {
                        pressureLow.setCustomValidity("Wartość nieprawdopodobna");
                    }
                    pressureLow.reportValidity();
                }
            }

            if (inputs[activeinput] == "cholesterol" && knowsDropdown.val() == "Yes") {
                e.value = e.value.toString().replace(',', '.');
                var chol = e.value;
                if (unitDropdown.val() == "mmol/l") {chol = chol * 38.7;}
                let levelChol = getLevel(chol, cholesterolLevels);
                if(levelChol.class !== "green"){
                    let alertChol = "Twój cholesterol jest " + levelChol.description+". "+levelChol.comment;
                    alert(alertChol);
                    $("#cholesterol_risk").html(alertChol+"<br/>");
                }
            }

            if (form.proceed) {
                activeinput++;
                $('#div_' + inputs[activeinput - 1]).fadeOut('slow', function () {
                    $('#div_' + inputs[activeinput]).fadeIn('slow');
                });
            }

        } else {
            if (e.value == "") {
                e.setCustomValidity("Podaj wartość");
            } else {
                e.setCustomValidity("Wartość nieprawdopodobna");
            }
            e.reportValidity();
        }
        if (activeinput == inputs.length - 1) {
            $('button#id_next').fadeOut('slow', function () {
                $('button#id_check').fadeIn('slow').css("display","inline-block");
            });
        }
    };

    function preventDoubleClick(prevClick, clickHandler) {
        let clickTime = new Date().getSeconds();
        if (clickTime === prevClick.time) {
            let e = document.getElementById('id_' + inputs[activeinput]);
            if (!e.checkValidity()) {
                e.reportValidity();
            } else if (!pressureLow.checkValidity()) {
                pressureLow.reportValidity();
            }
            prevClick.time = clickTime;
            return;
        }
        clickHandler();
        prevClick.time = clickTime;
    }

    $('button#id_next').on('keypress click', function(e) {
        if (e.which === 13 || e.type === 'click') {
            preventDoubleClick(nextTabClick, nextTabClickHandler);
        }
    });

    $('button#id_back').on('keypress click', function(e) {
        if (e.which === 13 || e.type === 'click') {
            preventDoubleClick(prevTabClick, prevTabClickHandler);
        }
    });

    againButton.click(function () {
        location.reload(true);
    });

    $('select.reveal').on("change", function () {
        var knows_id = $(this).attr('id');
        var id = knows_id.split("_")[1];
        if (this.value == 'Yes') {
            $('#id_' + id).prop('required', true);
            $('#subdiv_' + id).fadeIn('slow');
        } else {
            $('#id_' + id).prop('required', false);
            $('#subdiv_' + id).fadeOut('slow');
        }
    });

    replaceBasedOnDropdown(unitDropdown, 'mg/dl', function() {
        cholInput.attr({'min': 100.0});
        cholInput.attr({'max': 400.0});
        cholInput.attr({'placeholder': 190});
    }, function() {
        cholInput.attr({'min': 3.0});
        cholInput.attr({'max': 10.0});
        cholInput.attr({'placeholder': 5.0});
    });

    $("#id_form").submit(function (event) {

        event.preventDefault();
        window.params = $(this).serializeArray();
        params = new Params(window.params);

        $.ajaxSetup({
            headers:
                {'X-CSRFToken': $('meta[name="csrf-token"]').attr('content')}
        });

        let jsonParams = {};
        for (var i = 0; i < window.params.length; i++) {
            jsonParams[window.params[i]['name']] = window.params[i]['value'];
        }

        $.ajax({
            url: baseUrl + '/post/?' + $.param(window.params),
            type: 'POST',
            ContentType: 'application/json',
            data: jsonParams
        })
            // .fail(e => console.log(e));
        
        let age = params.get("age");
        let ageToGo = ageGroups
            .map(function(group){return group.lowerBound})
            .filter(function(element){return element > age});
        if (age >= 40) {ageToGo = [age].concat(ageToGo);}

        let sick = checkIfSick();
        if (sick===0){
            myChart.data.labels = ageToGo;
            getGraph(true);
            createRiskButtons();
            setAgeMessage(age);
        } else {
            getSickSCORE(url, sick);
            $('#base_message').show();
            $("#non_score_message").show();
            $('#forecast_div').hide();
            $('#heart_age_div').hide();
        }

        checkOtherFactors()
        createTargetButtons(age);
        setLipidProfileRecommendation();

        formSection.fadeOut('slow', function () {
            messageSection.fadeIn('slow');
        });

        $([document.documentElement, document.body]).animate({
            scrollTop: $("#normal_recheck").offset().top
        }, 2000);

    });

    $('button.risk').click(function () {

        var type = $(this).attr('id');
        let params = $("#id_form").serializeArray();
        var input = {};
        var current = {};
        var equal = true;

        for (let key in right_levels[type]) {
            input[key] = checkParam(params, key);
            current[key] = checkParam(window.params, key);
            if (input[key] !== current[key]) {
                equal = false
            };
        }

        if (equal) {
            for (let key in right_levels[type]) {
                changeParam(window.params, key, right_levels[type][key]);
            }
            $(this).attr({'class': "btn green square risk"});
            counter++;
        } else {
            for (let key in right_levels[type]) {
                changeParam(window.params, key, input[key]);
            }
            $(this).attr({'class': "btn red2 square risk"});
            counter--;
        }

        getGraph(false);

        if (counter == 0) {
            $('#id_secondary_message').fadeOut('slow', function () {
                $('#graph_instruction').fadeIn('slow');
            });
        } else {
            $('#graph_instruction').fadeOut('slow', function () {
                $('#id_secondary_message').fadeIn('slow');
            });
        }
    });

    function getGraph(primary){
        let ageToGo = myChart.data.labels;
        for (var i in ageToGo) {
            changeParam(window.params, "age", ageToGo[i]);
            getSCORE(url, primary, i);
        }
        changeParam(window.params, "age", ageToGo[0]);
    }

    $('#raport').click(function () {
        document.getElementById("target_smoking").style.display = null;
        document.getElementById("target_pressure").style.display = null;
        document.getElementById("target_cholesterol").style.display = null;
        document.getElementById("target_bmi").style.display = null;
        document.getElementById("target_food").style.display = null;
        document.getElementById("target_activity").style.display = null;
        $('#trouble_row').removeClass();
        window.print();
        $('#trouble_row').addClass("row");
    });
});
