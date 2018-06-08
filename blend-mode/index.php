<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Blend Mode</title>
    <link rel="stylesheet" href="assets/css/style.min.css?hash=<?= time() ?>">
</head>
<body>
<div class="wrapper">
    <div class="slider -main">
        <picture>
            <source srcset="/assets/images/image-1.jpg" media="(min-width: 600px)">
            <img class="image"  src="/assets/images/image-1.jpg" alt="MDN">
        </picture>
        <picture>
            <source srcset="/assets/images/image-2.jpg" media="(min-width: 600px)">
            <img class="image"  src="/assets/images/image-2.jpg" alt="MDN">
        </picture>
        <picture>
            <source srcset="/assets/images/image-3.jpg" media="(min-width: 600px)">
            <img class="image"  src="/assets/images/image-3.jpg" alt="MDN">
        </picture>
        <picture>
            <source srcset="/assets/images/image-4.jpg" media="(min-width: 600px)">
            <img class="image" src="/assets/images/image-4.jpg" alt="MDN">
        </picture>
        <picture>
            <source srcset="/assets/images/image-5.jpg" media="(min-width: 600px)">
            <img class="image" src="/assets/images/image-5.jpg" alt="MDN">
        </picture>
    </div>
    <div class="menu mx-vh-center">
        <div class="menu__list">
            <div class="burger -theme_persimmon">
                <div class="burger__blind mx-fill"></div>
                <div class="burger__line -first"></div>
                <div class="burger__line -second"></div>
                <div class="burger__line -third"></div>
            </div>
            <div class="burger -radial">
                <div class="burger__blind mx-fill"></div>
                <div class="burger__line -first"></div>
                <div class="burger__line -second"></div>
                <div class="burger__line -third"></div>
            </div>
            <div class="burger -smooth -theme_cerulean">
                <div class="burger__blind mx-fill"></div>
                <div class="burger__line -first"></div>
                <div class="burger__line -second"></div>
                <div class="burger__line -third"></div>
            </div>
        </div>
    </div>
</div>
<script src="assets/js/vendors.min.js"></script>
<script src="assets/js/source.min.js?hash=<?= time() ?>"></script>
</body>
</html>