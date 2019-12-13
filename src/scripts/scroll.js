window.addEventListener('DOMContentLoaded', function() {
    let controller = new ScrollMagic.Controller();

    let scene = new ScrollMagic.Scene({
            triggerElement: '.header__logo'
        })
        .setClassToggle('.header__logo', 'header__logo--show')
        .addTo(controller);

    let sceneNote = new ScrollMagic.Scene({
            triggerElement: '.notebook__image'
        })
        .setClassToggle('.notebook__image', 'notebook__image--show')
        .addTo(controller);

    let sceneDescText1 = new ScrollMagic.Scene({
            triggerElement: '.desc-field__text-one'
        })
        .setClassToggle('.desc-field__text-one', 'desc-field__text-one--show')
        .addTo(controller);

    let sceneDescText2 = new ScrollMagic.Scene({
            triggerElement: '.desc-field__text-two'
        })
        .setClassToggle('.desc-field__text-two', 'desc-field__text-two--show')
        .addTo(controller);

    let sceneDescText3 = new ScrollMagic.Scene({
            triggerElement: '.desc-field__text-three'
        })
        .setClassToggle('.desc-field__text-three', 'desc-field__text-three--show')
        .addTo(controller);

    let sceneMainlyImage = new ScrollMagic.Scene({
            triggerElement: '.mainly__image'
        })
        .setClassToggle('.mainly__image', 'mainly__image--show')
        .addTo(controller);

    let sceneBlocksDescText = new ScrollMagic.Scene({
            triggerElement: '.blocks__desc-text'
        })
        .setClassToggle('.blocks__desc-text', 'blocks__desc-text--show')
        .addTo(controller);

    let sceneBlocksVisualRow1 = new ScrollMagic.Scene({
            triggerElement: '.blocks__visual-row--one'
        })
        .setClassToggle('.blocks__visual-row--one', 'blocks__visual-row--one--show')
        .addTo(controller);

    let sceneBlocksVisualRow2 = new ScrollMagic.Scene({
            triggerElement: '.blocks__visual-row--two'
        })
        .setClassToggle('.blocks__visual-row--two', 'blocks__visual-row--two--show')
        .addTo(controller);

    let sceneBlocksVisualRow3 = new ScrollMagic.Scene({
            triggerElement: '.blocks__visual-row--three'
        })
        .setClassToggle('.blocks__visual-row--three', 'blocks__visual-row--three--show')
        .addTo(controller);

    let sceneBlocksVisualRow4 = new ScrollMagic.Scene({
            triggerElement: '.blocks__visual-row--four'
        })
        .setClassToggle('.blocks__visual-row--four', 'blocks__visual-row--four--show')
        .addTo(controller);

    let sceneGraphicDesc = new ScrollMagic.Scene({
            triggerElement: '.graphic__desc'
        })
        .setClassToggle('.graphic__desc', 'graphic__desc--show')
        .addTo(controller);

    let sceneGraphicFieldMain = new ScrollMagic.Scene({
            triggerElement: '.graphic__field-main'
        })
        .setClassToggle('.graphic__field-main', 'graphic__field-main--show')
        .addTo(controller);

    let sceneSvgMac = new ScrollMagic.Scene({
            triggerElement: '.graphic__field-aside-row-item--mac'
        })
        .setClassToggle('.graphic__field-aside-row-item--mac', 'graphic__field-aside-row-item--mac--show')
        .addTo(controller);

    let sceneSvgMonitor = new ScrollMagic.Scene({
            triggerElement: '.graphic__field-aside-row-item--monitor'
        })
        .setClassToggle('.graphic__field-aside-row-item--monitor', 'graphic__field-aside-row-item--monitor--show')
        .addTo(controller);

    let sceneSvgSmartwatch = new ScrollMagic.Scene({
            triggerElement: '.graphic__field-aside-row-item--smartwatch'
        })
        .setClassToggle('.graphic__field-aside-row-item--smartwatch', 'graphic__field-aside-row-item--smartwatch--show')
        .addTo(controller);

    let sceneSvgIphone = new ScrollMagic.Scene({
            triggerElement: '.graphic__field-aside-row-item--iphone'
        })
        .setClassToggle('.graphic__field-aside-row-item--iphone', 'graphic__field-aside-row-item--iphone--show')
        .addTo(controller);

    let sceneSvgPercent = new ScrollMagic.Scene({
            triggerElement: '.graphic__field-aside-row-item--percent'
        })
        .setClassToggle('.graphic__field-aside-row-item--percent', 'graphic__field-aside-row-item--percent--show')
        .addTo(controller);

    let sceneSvgIpad = new ScrollMagic.Scene({
            triggerElement: '.graphic__field-aside-row-item--ipad'
        })
        .setClassToggle('.graphic__field-aside-row-item--ipad', 'graphic__field-aside-row-item--ipad--show')
        .addTo(controller);

    let sceneSvgHalfphone = new ScrollMagic.Scene({
            triggerElement: '.graphic__field-aside-row-item--halfphone'
        })
        .setClassToggle('.graphic__field-aside-row-item--halfphone', 'graphic__field-aside-row-item--halfphone--show')
        .addTo(controller);

    let sceneSvgNotebook = new ScrollMagic.Scene({
            triggerElement: '.graphic__field-aside-row-item--notebook'
        })
        .setClassToggle('.graphic__field-aside-row-item--notebook', 'graphic__field-aside-row-item--notebook--show')
        .addTo(controller);

    let sceneSvgUsb = new ScrollMagic.Scene({
            triggerElement: '.graphic__field-aside-row-item--usb'
        })
        .setClassToggle('.graphic__field-aside-row-item--usb', 'graphic__field-aside-row-item--usb--show')
        .addTo(controller);

    let sceneSvgPhoto = new ScrollMagic.Scene({
            triggerElement: '.graphic__field-aside-row-item--photo'
        })
        .setClassToggle('.graphic__field-aside-row-item--photo', 'graphic__field-aside-row-item--photo--show')
        .addTo(controller);

    let sceneSvgBox = new ScrollMagic.Scene({
            triggerElement: '.graphic__field-aside-row-item--box'
        })
        .setClassToggle('.graphic__field-aside-row-item--box', 'graphic__field-aside-row-item--box--show')
        .addTo(controller);

    let sceneSvgRound = new ScrollMagic.Scene({
            triggerElement: '.graphic__field-aside-row-item--round'
        })
        .setClassToggle('.graphic__field-aside-row-item--round', 'graphic__field-aside-row-item--round--show')
        .addTo(controller);

    let sceneDetailImage = new ScrollMagic.Scene({
            triggerElement: '.detail__image'
        })
        .setClassToggle('.detail__image', 'detail__image--show')
        .addTo(controller);

    let scenePagesImage1 = new ScrollMagic.Scene({
            triggerElement: '.pages__image-one'
        })
        .setClassToggle('.pages__image-one', 'pages__image-one--show')
        .addTo(controller);

    let scenePagesImage2 = new ScrollMagic.Scene({
            triggerElement: '.pages__image-two'
        })
        .setClassToggle('.pages__image-two', 'pages__image-two--show')
        .addTo(controller);

    let scenePagesImageOther1 = new ScrollMagic.Scene({
            triggerElement: '.pages__image--other-one'
        })
        .setClassToggle('.pages__image--other-one', 'pages__image--other-one--show')
        .addTo(controller);

    let scenePagesImageOther2 = new ScrollMagic.Scene({
            triggerElement: '.pages__image--other-two'
        })
        .setClassToggle('.pages__image--other-two', 'pages__image--other-two--show')
        .addTo(controller);

    let scenePhonesPercents = new ScrollMagic.Scene({
            triggerElement: '.phones__percents'
        })
        .setClassToggle('.phones__percents', 'phones__percents--show')
        .addTo(controller);

    let scenePhonesItemOne = new ScrollMagic.Scene({
            triggerElement: '.phones__item--one'
        })
        .setClassToggle('.phones__item--one', 'phones__item--one--show')
        .reverse(false)
        .addTo(controller);

    let scenePhonesItemTwo = new ScrollMagic.Scene({
            triggerElement: '.phones__item--two'
        })
        .setClassToggle('.phones__item--two', 'phones__item--two--show')
        .reverse(false)
        .addTo(controller);

    let scenePhonesItemThree = new ScrollMagic.Scene({
            triggerElement: '.phones__item--three'
        })
        .setClassToggle('.phones__item--three', 'phones__item--three--show')
        .reverse(false)
        .addTo(controller);

    let scenePhonesItemFour = new ScrollMagic.Scene({
            triggerElement: '.phones__item--four'
        })
        .setClassToggle('.phones__item--four', 'phones__item--four--show')
        .reverse(false)
        .addTo(controller);

    let scenePhonesItemFive = new ScrollMagic.Scene({
            triggerElement: '.phones__item--five'
        })
        .setClassToggle('.phones__item--five', 'phones__item--five--show')
        .reverse(false)
        .addTo(controller);

    let scenePhonesItemSix = new ScrollMagic.Scene({
            triggerElement: '.phones__item--six'
        })
        .setClassToggle('.phones__item--six', 'phones__item--six--show')
        .reverse(false)
        .addTo(controller);

    let scenePhonesItemSeven = new ScrollMagic.Scene({
            triggerElement: '.phones__item--seven'
        })
        .setClassToggle('.phones__item--seven', 'phones__item--seven--show')
        .reverse(false)
        .addTo(controller);

    let scenePhonesItemEight = new ScrollMagic.Scene({
            triggerElement: '.phones__item--eight'
        })
        .setClassToggle('.phones__item--eight', 'phones__item--eight--show')
        .reverse(false)
        .addTo(controller);

    let sceneInstagramDescText = new ScrollMagic.Scene({
            triggerElement: '.instagram__desc-text'
        })
        .setClassToggle('.instagram__desc-text', 'instagram__desc-text--show')
        .addTo(controller);

    let sceneInstagramItemLeft = new ScrollMagic.Scene({
            triggerElement: '.instagram__item-left'
        })
        .setClassToggle('.instagram__item-left', 'instagram__item-left--show')
        .reverse(false)
        .addTo(controller);

    let sceneInstagramItemCenter = new ScrollMagic.Scene({
            triggerElement: '.instagram__item-center'
        })
        .setClassToggle('.instagram__item-center', 'instagram__item-center--show')
        .reverse(false)
        .addTo(controller);

    let sceneInstagramItemRight = new ScrollMagic.Scene({
            triggerElement: '.instagram__item-right'
        })
        .setClassToggle('.instagram__item-right', 'instagram__item-right--show')
        .reverse(false)
        .addTo(controller);

    let sceneFooterDesc = new ScrollMagic.Scene({
            triggerElement: '.footer__desc'
        })
        .setClassToggle('.footer__desc', 'footer__desc--show')
        .addTo(controller);

});