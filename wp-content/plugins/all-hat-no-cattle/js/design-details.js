/**
 * Design Details Meta Box
 * 
 * This script adds a meta box for design details on the design edit screen
 */

jQuery(document).ready(function($) {
    // Add meta box for design details
    if ($('#design-details-meta-box').length === 0) {
        // Create the meta box container
        var metaBox = $('<div id="design-details-meta-box" class="postbox"></div>');
        
        // Add the meta box header
        metaBox.append('<h2 class="hndle ui-sortable-handle"><span>Design Details</span></h2>');
        
        // Create the meta box content
        var metaBoxContent = $('<div class="inside"></div>');
        
        // Add the price field
        var priceField = $('<div class="form-field" style="margin-bottom: 15px;"></div>');
        priceField.append('<label for="design_price" style="display: block; margin-bottom: 5px; font-weight: bold;">Price:</label>');
        
        // Get the current price value
        var currentPrice = $('#design_price').val() || '';
        
        // Create the price input with dollar sign
        var priceInputWrapper = $('<div style="display: flex; align-items: center;"></div>');
        priceInputWrapper.append('<span style="margin-right: 5px;">$</span>');
        priceInputWrapper.append('<input type="text" id="design_price" name="design_price" value="' + currentPrice + '" style="width: 100px;" />');
        
        priceField.append(priceInputWrapper);
        priceField.append('<p class="description">Enter the price of the design (e.g. 59.99)</p>');
        
        // Add the category field
        var categoryField = $('<div class="form-field" style="margin-bottom: 15px;"></div>');
        categoryField.append('<label for="design_category" style="display: block; margin-bottom: 5px; font-weight: bold;">Category:</label>');
        
        // Get the current category value
        var currentCategory = $('#design_category').val() || '';
        
        // Create a select dropdown for categories
        var categorySelect = $('<select id="design_category" name="design_category" style="width: 100%;"></select>');
        
        // Add category options
        var categories = [
            { value: '', label: 'Select a category' },
            { value: 'shirt', label: 'Shirt' },
            { value: 'dress', label: 'Dress' },
            { value: 'pants', label: 'Pants' },
            { value: 'accessory', label: 'Accessory' },
            { value: 'other', label: 'Other' }
        ];
        
        $.each(categories, function(index, category) {
            var selected = currentCategory === category.value ? 'selected="selected"' : '';
            categorySelect.append('<option value="' + category.value + '" ' + selected + '>' + category.label + '</option>');
        });
        
        categoryField.append(categorySelect);
        categoryField.append('<p class="description">Select the category for this design</p>');
        
        // Add fields to the meta box content
        metaBoxContent.append(priceField);
        metaBoxContent.append(categoryField);
        
        // Add a nonce field for security
        metaBoxContent.append('<input type="hidden" name="design_details_nonce" value="' + $('#_wpnonce').val() + '" />');
        
        // Add the meta box content to the meta box
        metaBox.append(metaBoxContent);
        
        // Add the meta box after the title
        $('#titlediv').after(metaBox);
        
        // Save the design details when the post is saved
        $('#post').on('submit', function() {
            var priceVal = $('#design_price').val();
            var categoryVal = $('#design_category').val();
            
            // Add hidden fields to the form
            if ($('#hidden_design_price').length === 0) {
                $('<input type="hidden" id="hidden_design_price" name="price" />').appendTo($(this));
            }
            
            if ($('#hidden_design_category').length === 0) {
                $('<input type="hidden" id="hidden_design_category" name="category" />').appendTo($(this));
            }
            
            // Set the values
            $('#hidden_design_price').val(priceVal);
            $('#hidden_design_category').val(categoryVal);
        });
    }
}); 