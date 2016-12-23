/**
 * Created by Riven on 2016/12/17.
 */

var Mcookie = function (runtime) {
    this.runtime = runtime
    this.color = {
        "primary": "#4a7d9b",
        "secondary": "#b7cbd7",
        "tertiary": "#e3e3e3"
    };

};

Mcookie.prototype.getBlocks = function () {
    var color = this.color;
    var OUTPUT_SHAPE_ROUND = 2;

    return {
        'mcookie_port_option': {
            init: function() {
                this.jsonInit({
                    "id": "mcookie_port_option",
                    "message0": "%1",
                    "args0": [
                        {
                            "type": "field_dropdown",
                            "name": "MCOOKIE_PORT_OPTION",
                            "options": [
                                ['0/1', '0_1'],
                                ['2/3', '2_3'],
                                ['4/5', '4_5'],
                                ['6/7', '6_7'],
                                ['8/9', '8_9'],
                                ['10/11', '10_11'],
                                ['12/13', '12_13'],
                                ['A0/A1', 'A0_A1'],
                                ['A2/A3', 'A2_A3'],
                                ['A6/A7', 'A6_A7']
                            ]
                        }
                    ],
                    "inputsInline": true,
                    "output": "String",
                    "colour": color.secondary,
                    "colourSecondary": color.secondary,
                    "colourTertiary": color.tertiary,
                    "outputShape": 2
                });
            }
        },
        "mcookie_level_option":{
            init: function() {
                this.jsonInit({
                    "id": "mcookie_level_option",
                    "message0": "%1",
                    "args0": [
                        {
                            "type": "field_dropdown",
                            "name": "MCOOKIE_LEVEL_OPTION",
                            "options": [
                                ['high', 'HIGH'],
                                ['low', 'LOW']
                            ]
                        }
                    ],
                    "inputsInline": true,
                    "output": "String",
                    "colour": color.secondary,
                    "colourSecondary": color.secondary,
                    "colourTertiary": color.tertiary,
                    "outputShape": 2
                });
            }
        },
        'mcookie_led':{
            init: function() {
                this.jsonInit({
                    "id": "mcookie_led",
                    "message0": "LED %1 %2",
                    "args0": [
                        {
                            "type": "input_value",
                            "name": "MCOOKIE_PORT_OPTION"
                        },
                        {
                            "type": "input_value",
                            "name": "MCOOKIE_LEVEL_OPTION"
                        }
                    ],
                    "inputsInline": true,
                    "previousStatement": null,
                    "nextStatement": null,
                    "colour": color.primary,
                    "colourSecondary": color.secondary,
                    "colourTertiary": color.tertiary
                });
            }
        },
        'mcookie_button':{
            init: function() {
                this.jsonInit({
                    "id": "mcookie_button",
                    "message0": "BUTTON %1 ",
                    "args0": [
                        {
                            "type": "input_value",
                            "name": "MCOOKIE_PORT_OPTION"
                        }
                    ],
                    "inputsInline": true,
                    "output": "Number",
                    "colour": color.primary,
                    "colourSecondary": color.secondary,
                    "colourTertiary": color.tertiary,
                    "outputShape": 2
                });
            }
        },
        'mcookie_crash':{
            init: function() {
                this.jsonInit({
                    "id": "mcookie_crash",
                    "message0": "CRASH %1 ",
                    "args0": [
                        {
                            "type": "input_value",
                            "name": "MCOOKIE_PORT_OPTION"
                        }
                    ],
                    "inputsInline": true,
                    "output": "Number",
                    "colour": color.primary,
                    "colourSecondary": color.secondary,
                    "colourTertiary": color.tertiary,
                    "outputShape": 2
                });
            }
        },
        'mcookie_tone':{
            init: function() {
                this.jsonInit({
                    "id": "mcookie_tone",
                    "message0": "BUZZER %1 %2hz %3ms",
                    "args0": [
                        {
                            "type": "input_value",
                            "name": "MCOOKIE_PORT_OPTION"
                        },
                        {
                            "type": "input_value",
                            "name": "FREQUENCY"
                        },
                        {
                            "type": "input_value",
                            "name": "DURATION"
                        }
                    ],
                    "inputsInline": true,
                    "previousStatement": null,
                    "nextStatement": null,
                    "colour": color.primary,
                    "colourSecondary": color.secondary,
                    "colourTertiary": color.tertiary
                });
            }
        },
        'mcookie_gesture':{
            init: function() {
                this.jsonInit({
                    "id": "mcookie_gesture",
                    "message0": "GESTURE %1 ",
                    "args0": [
                        {
                            "type": "input_value",
                            "name": "MCOOKIE_PORT_OPTION"
                        }
                    ],
                    "inputsInline": true,
                    "output": "Number",
                    "colour": color.primary,
                    "colourSecondary": color.secondary,
                    "colourTertiary": color.tertiary,
                    "outputShape": 2
                });
            }
        },
        'mcookie_rgb':{
            init: function() {
                this.jsonInit({
                    "id": "mcookie_rgb",
                    "message0": "COLORLED %1 color %2",
                    "args0": [
                        {
                            "type": "input_value",
                            "name": "MCOOKIE_PORT_OPTION"
                        },
                        {
                            "type": "input_value",
                            "name": "COLOR"
                        }
                    ],
                    "previousStatement": null,
                    "nextStatement": null,
                    "colour": color.primary,
                    "colourSecondary": color.secondary,
                    "colourTertiary": color.tertiary
                });
            }
        },
        'mcookie_lumin':{
            init: function() {
                this.jsonInit({
                    "id": "mcookie_lumin",
                    "message0": "LIGHT-AI %1 ",
                    "args0": [
                        {
                            "type": "input_value",
                            "name": "MCOOKIE_PORT_OPTION"
                        }
                    ],
                    "inputsInline": true,
                    "output": "Number",
                    "colour": color.primary,
                    "colourSecondary": color.secondary,
                    "colourTertiary": color.tertiary,
                    "outputShape": 2
                });
            }
        },
        'mcookie_mic':{
            init: function() {
                this.jsonInit({
                    "id": "mcookie_mic",
                    "message0": "MIC %1 ",
                    "args0": [
                        {
                            "type": "input_value",
                            "name": "MCOOKIE_PORT_OPTION"
                        }
                    ],
                    "inputsInline": true,
                    "output": "Number",
                    "colour": color.primary,
                    "colourSecondary": color.secondary,
                    "colourTertiary": color.tertiary,
                    "outputShape": 2
                });
            }
        },
    };
};

Mcookie.prototype.getPrimitives = function() {
    return {
        'mcookie_led': this.mcookie_led,

    };
};

Mcookie.prototype.mcookie_led = function(argValues, util) {
    console.log("argValues "+argValues);
    var level = argValues.MCOOKIE_LEVEL_OPTION;
    var port = argValues.MCOOKIE_PORT_OPTION;

};


Mcookie.prototype.getToolbox = function () {
    return '<category name="mCookie" colour="#bcee3b" secondaryColour="#b4ec24">'+
        '<block type="mcookie_led">'+
        '<value name="MCOOKIE_PORT_OPTION">'+
        '<shadow type="mcookie_port_option"></shadow>'+
        '</value>'+
        '<value name="MCOOKIE_LEVEL_OPTION">'+
        '<shadow type="mcookie_level_option"></shadow>'+
        '</value>'+
        '</block>'+
        '<block type="mcookie_button">'+
        '<value name="MCOOKIE_PORT_OPTION">'+
        '<shadow type="mcookie_port_option"></shadow>'+
        '</value>'+
        '</block>'+
        '<block type="mcookie_crash">'+
        '<value name="MCOOKIE_PORT_OPTION">'+
        '<shadow type="mcookie_port_option"></shadow>'+
        '</value>'+
        '</block>'+
        '<block type="mcookie_tone">'+
        '<value name="MCOOKIE_PORT_OPTION">'+
        '<shadow type="mcookie_port_option"></shadow>'+
        '</value>'+
        '<value name="FREQUENCY">'+
        '<shadow type="math_number">'+
        '<field name="NUM">200</field>'+
        '</shadow>'+
        '</value>'+
        '<value name="DURATION">'+
        '<shadow type="math_number">'+
        '<field name="NUM">500</field>'+
        '</shadow>'+
        '</value>'+
        '</block>'+
        '<block type="mcookie_rgb">'+
        '<value name="MCOOKIE_PORT_OPTION">'+
        '<shadow type="mcookie_port_option"></shadow>'+
        '</value>'+
        '<value name="COLOR">'+
        '<shadow type="colour_picker">'+
        '</shadow>'+
        '</value>'+
        '</block>'+
        '<block type="mcookie_gesture">'+
        '<value name="MCOOKIE_PORT_OPTION">'+
        '<shadow type="mcookie_port_option"></shadow>'+
        '</value>'+
        '</block>'+
        '<block type="mcookie_lumin">'+
        '<value name="MCOOKIE_PORT_OPTION">'+
        '<shadow type="mcookie_port_option"></shadow>'+
        '</value>'+
        '</block>'+
        '<block type="mcookie_mic">'+
        '<value name="MCOOKIE_PORT_OPTION">'+
        '<shadow type="mcookie_port_option"></shadow>'+
        '</value>'+
        '</block>'+
        '</category>';
}


module.exports = Mcookie;
