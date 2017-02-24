/**
 * Created by andrejbastrikin on 08.02.17.
 */
$( document ).ready(function() {

    'use strict';

    var output_form_object = {};
    // Cookies.set('output_form_object', output_form_object);

    function go_to_step(this_button) {

        var current_step = $('body').data('step');
        var progress_title = $('[data-title]');
        var progress_percentage = $('.progress-bar');
        var prev_button = $('.action-buttons li.previous a');
        var next_button = $('.action-buttons li.next a');
        var go_step = this_button.data('step');

        var change_header = function (width, text) {
            progress_percentage.css('width', width);
            progress_title.text(text);
        }, change_buttons = function (btn_prev_direction, btn_next_direction) {
            prev_button.removeClass('hide').data('step',btn_prev_direction);
            next_button.removeClass('hide').data('step',btn_next_direction);
        }, change_sections_to = function (open_section) {
            $('.step').addClass('hide');
            $(open_section).removeClass('hide');
        }, trigger_form_validation = function () {
            // var current_step_wrap = '.'+$('body').data('step');
            var current_form = $('form');
            // var current_form = $(current_step_wrap).find('form');
            var is_form_inside = current_form.length;
            if (is_form_inside){
                // current_form.find('[type=submit]').click();
                current_form.submit();
            }
            if (current_form.valid()) return true;
            else return false;
        };


        if (go_step==='step_1'){
            change_header('10%', 'Step 1 of 8 - Select from our 1, 2 or 3 Year Fixed Term Savings Bonds');
            change_sections_to('.step_1');
            change_buttons('step_1', 'step_2');
            prev_button.addClass('hide');
            $('body').data('step', 'step_1');
        }
        else if (go_step==='step_2'){
            change_header('20%', 'Step 2 of 8 - Applicant Set Up');
            change_sections_to('.step_2');
            change_buttons('step_1', 'step_3');
            $('body').data('step', 'step_2');
        }
        else if (go_step==='step_3'){
            change_header('34%', 'Step 3 of 8 - Terms & Conditions');
            change_sections_to('.step_3');
            change_buttons('step_2', 'step_4');
            $('body').data('step', 'step_3');
        }
        else if (go_step==='step_4'){
            if (trigger_form_validation()){
                change_header('44%', 'Step 4 of 8 - Applicant 1 Details');
                change_sections_to('.step_4');
                change_buttons('step_3', 'step_5');
                $('body').data('step', 'step_4');
            }
        }
        else if (go_step==='step_5'){
            if (trigger_form_validation()){
                change_header('54%', 'Step 5 of 8 - Applicant 1 - Security Questions');
                change_sections_to('.step_5');
                change_buttons('step_4', 'step_6');
                $('body').data('step', 'step_5');
            }
        }
        else if (go_step==='step_6'){
            if (trigger_form_validation()){
                change_header('64%', 'Step 6 of 8 - Applicant 2 Details');
                change_sections_to('.step_6');
                change_buttons('step_5', 'step_7');
                $('body').data('step', 'step_6');
            }
        }
        else if (go_step==='step_7'){
            if (trigger_form_validation()){
                change_header('77%', 'Step 7 of 8 - Applicant 2 - Security Questions');
                change_sections_to('.step_7');
                change_buttons('step_6', 'step_8');
                $('body').data('step', 'step_7');
            }
        }
        else if (go_step==='step_8'){
            if (trigger_form_validation()){
                change_header('100%', 'Step 8 of 8 - Bank account details');
                change_sections_to('.step_8');
                change_buttons('step_7', 'step_9');
                $('body').data('step', 'step_8');
            }
        }
        else if (go_step==='step_9'){
            if (trigger_form_validation()){
                $('body').data('step', 'step_9');
                $('form').unbind('submit');
            }
        }


        // console.log(go_step);


        // console.log($("form").valid());

        // if ($(".step_3 form").jqBootstrapValidation("hasErrors")) {
        //     alert("Something is wrong!");
        // }

        // console.log($('body').data('step'));


    }

    $('form').validate({
        errorPlacement: function(error, element) {
            var fg = element.closest('.form-group');
            error.insertAfter(fg);
        },
        highlight: function(element) {
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight: function(element) {
            $(element).closest('.form-group').removeClass('has-error');
        },
        submitHandler: function(form) {
            // return false;
            // go_to_step();
            // $('form').submit();
        },
        ignore:":not(:visible)"
    });



    $('.action-buttons li.previous a').on('click', function () {
        go_to_step($(this));
        return false;
    });

    $('.action-buttons li.next a').on('click', function () {
        go_to_step($(this));
        return false;
    });



});