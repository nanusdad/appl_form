Template.form_details.rendered = function() {
    var data = {
        "gender": "Male",
        "nationality": "Indian",
        "email_id": "none@none.com",
        "birthdate": "dd/mm/yyyy"

    };

    var schema = {
        // "title": "",
       // "description": "",
        // "type": "object",
        "properties": {
            "cname": {
                "type": "string"
            },
            "gname": {
                "type": "string"
            },
            "gender": {
                "required": true,
                "enum": ["Male", "Female"]
            },
            "age": {
                "minimum": 18,
                "maximum": 99
            },
            "religion": {
                "type": "string"
            },
            "nationality": {
                "type": "string"
            },
            "birthdate": {
                "type": "string"
            },
            "mbbs_regn": {
                "type": "string"
            },
            "correspondence_address": {
                "type": "string"
            },
            "correspondence_city": {
                "type": "string"
            },
            "correspondence_district": {
                "type": "string"
            },
            "correspondence_state": {
                "type": "string"
            },
            "correspondence_pincode": {
                "type": "string"
            },
            "permanent_address": {
                "type": "string"
            },
            "permanent_city": {
                "type": "string"
            },
            "permanent_district": {
                "type": "string"
            },
            "permanent_state": {
                "type": "string"
            },
            "permanent_pincode": {
                "type": "string"
            },
            "telephone": {
                "type": "string"
            },
            "mobile_phone": {
                "type": "string"
            },
            "email_id": {
                "type": "string"
            },
            "photoFile": {
                "type": "string",
                "format": "uri"
            }
        }
    };

    /**
     * Layout options for the form
     *
     * These options describe UI configuration for the controls that are rendered for the data and schema.  You can
     * tweak the layout and presentation aspects of the form in this section.
     */
    var options = {
        "fields": {
            "cname": {
                "type": "text",
                "label": "Name :",
                "helper": "(As it appears in your MBBS certificate)"
            },
            "gname": {
                "type": "text",
                "label": "Name of Father / Husband :",
            },
            "gender": {
                "type": "radio",
                "label": "Gender :"
            },
            "age": {
                "type": "number",
                "label": "Age :",
                "size": 500
            },
            "religion": {
                "type": "text",
                "label": "Religion :"
            },
            "nationality": {
                "type": "text",
                "label": "Nationality :"
            },
            "birthdate": {
                "type": "text",
                "label": "Birth Date :"
            },
            "mbbs_regn": {
                "type": "text",
                "label": "MBBS Registration Number :"
            },
            "correspondence_address": {
                "label": "Correspondence Address :",
                "type": "textarea"
            },
            "correspondence_city": {
                "type": "text",
                "label": "City :"
            },
            "correspondence_district": {
                "type": "text",
                "label": "District :"
            },
            "correspondence_state": {
                "type": "text",
                "label": "State :"
            },
            "correspondence_pincode": {
                "type": "text",
                "label": "Pin Code :"
            },
            "permanent_address": {
                "type": "textarea",
                "label": "Permanent Address :"
            },
            "permanent_city": {
                "type": "text",
                "label": "City :"
            },
            "permanent_district": {
                "type": "text",
                "label": "District :"
            },
            "permanent_state": {
                "type": "text",
                "label": "State :"
            },
            "permanent_pincode": {
                "type": "text",
                "label": "Pin Code :"
            },
            "telephone": {
                "type": "phone",
                "label": "Telephone :"
            },
            "mobile_phone": {
                "type": "phone",
                "label": "Mobile Phone :"
            },
            "email_id": {
                "type": "email",
                "label": "Email ID :"
            },
            "photoFile": {
                "type": "file",
                "label": ""
            }
        },
        "renderForm": true,
        "form": {
            "attributes": {
                "method": "POST",
                "action": "save.php",
                "enctype": "multipart/form-data"
            },
            "buttons": {
                "submit": {
                    "value": "Submit the Form"
                }
            }
        }
    };


    // Alpaca.registerView({
    //     "id": "VIEW_WEB_REGISTRATION",
    //     "parent": "VIEW_BOOTSTRAP_CREATE",
    //     "title": "Registration Create View for the Web",
    //     "layout": {
    //         "template": '../public/registration-layout.html',
    //         "bindings": {
    //             "cname": "contact-info-fields",
    //             "gname": "contact-info-fields",
    //             "email_id": "contact-info-fields",
    //             "telephone": "contact-info-fields",
    //             "mobile_phone": "contact-info-fields",
    //             "address1": "contact-info-fields",
    //             "address2": "contact-info-fields",
    //             "city": "contact-info-fields",
    //             "state": "contact-info-fields",
    //             "zipcode": "contact-info-fields",
    //             "country": "contact-info-fields",
    //             "emergencyContact": "contact-info-fields",
    //             "vegetarian": "contact-info-fields",
    //             "dietaryComments": "contact-info-fields",
    //             "roomJune3": "contact-info-fields",
    //             "roomJune4": "contact-info-fields",
    //             "roomJune5": "contact-info-fields",
    //             "smoking": "contact-info-fields",
    //             "dinnerJune3": "contact-info-fields",
    //             "dinnerJune4": "contact-info-fields",
    //             "cambridgeTour": "contact-info-fields",
    //             "travel": "travel-arrangements-fields",
    //             "labWebsite": "interests-1",
    //             "photoFile": "interests-2",
    //             "researchDescription": "interests-3"
    //         }
    //     },
    //     "messages": {
    //         "invalidEmail": "Please enter a valid email address.",
    //         "invalidPhone": "Please enter a valid phone number.",
    //         "wordLimitExceeded": "The maximum word limit of {0} has been exceeded."
    //     }
    // });

    // var postRenderCallback = function(control) {

    //     // when an update is made to any fields in this control, we listen for the update and refresh
    //     // the DIV with id interests-summary
    //     $(control.getEl()).bind("fieldupdate", function() {

    //         // the json for the entire representation of the form
    //         var value = control.getValue();

    //         // summary
    //         var summary = "";
    //         if (value.name && value.email && value.organization) {
    //             // assemble a summary string
    //             summary = value.name + " (" + value.email + ") from " + value.organization;
    //         }

    //         // set summary
    //         $("#interests-summary").val(summary);

    //     });

    // };

    var templateLayouts =  {
        "threeColumnGridLayout": '<div class="container"> <div class="row">' 
                                    + '<div id="column-1" class="span4"> </div>' 
                                    + '<div id="column-2" class="span4"> </div>' 
                                    + '<div id="column-3" class="span4"> </div>' 
                                    + '</div></div>',
        "regnFormLayout": '<div class="container">' 
                            + '<div class="row">'
                                + '<div id="cname" class="span12">'
                                + '</div>'
                            + '</div>'
                            + '<div class="row">'
                                + '<div id="gname" class="span12">'
                                + '</div>'
                            + '</div>'
                            + '<div class="row">'
                                + '<div id="gender" class="span3">'
                                + '</div>'
                                + '<div id="age" class="span3">'
                                + '</div>'
                                + '<div id="religion" class="span3">'
                                + '</div>'
                                + '<div id="nationality" class="span3">'
                                + '</div>'
                            + '</div>'
                            + '<div class="row">'
                                + '<div id="birthdate" class="span6">'
                                + '</div>'
                                + '<div id="mbbs_regn" class="span6">'
                                + '</div>'
                            + '</div>'
                            + '<div class="row">'
                                + '<div class="span6">'
                                    + '<div class="row">'
                                        + '<div id="correspondence_address" class="span12">'
                                        +  '</div>'
                                    + '</div>'
                                    + '<div class="row">'
                                        + '<div id="correspondence_city" class="span3">' 
                                        + '</div>'
                                        + '<div id="correspondence_district" class="span3">'
                                        + '</div>'
                                    + '</div>'
                                    + '<div class="row">'
                                        + '<div id="correspondence_state" class="span3">' 
                                        + '</div>'
                                        + '<div id="correspondence_pincode" class="span3">'
                                        + '</div>'
                                    + '</div>'
                                + '</div>'
                                + '<div class="span6">'
                                    + '<div class="row">'
                                        + '<div id="permanent_address">'
                                        +  '</div>'
                                    + '</div>'
                                    + '<div class="row">'
                                        + '<div id="permanent_city" class="span3">' 
                                        + '</div>'
                                        + '<div id="permanent_district" class="span3">'
                                        + '</div>'
                                    + '</div>'
                                    + '<div class="row">'
                                        + '<div id="permanent_state" class="span3">' 
                                        + '</div>'
                                        + '<div id="permanent_pincode" class="span3">'
                                        + '</div>'
                                    + '</div>'
                                + '</div>'
                            + '</div>'

                        + '</div>'
    }

    $("#form").alpaca({
        "data": data,
        "schema": schema,
        "options": options,
        "view": {
            "parent": "VIEW_WEB_CREATE",
            "layout": {
                "template": "regnFormLayout",
                "bindings": {
                    "cname": "cname",
                    "gname": "gname",
                    "gender": "gender",
                    "age": "age",
                    "religion": "religion",
                    "nationality": "nationality",
                    "birthdate": "birthdate",
                    "mbbs_regn": "mbbs_regn",
                    "correspondence_address": "correspondence_address",
                    "correspondence_city": "correspondence_city",
                    "correspondence_district": "correspondence_district",
                    "correspondence_state": "correspondence_state",
                    "correspondence_pincode": "correspondence_pincode",
                    "permanent_address": "permanent_address",
                    "permanent_city": "permanent_city",
                    "permanent_district": "permanent_district",
                    "permanent_state": "permanent_state",
                    "permanent_pincode": "permanent_pincode"

                }
            },
            // "templates": {
            //     "threeColumnGridLayout": '<div class="container"> <div class="row">' + '<div id="column-1" class="span4"> </div>' + '<div id="column-2" class="span4"> </div>' + '<div id="column-3" class="span4"> </div>' + '</div></div>'
            // }
            "templates": templateLayouts

        }
        // "type": "create"
    });
}