<script>
export default {
    name: 'AppHeader'
};
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
            <a class="navbar-brand" href="#"> <img height='100px' width='100px' class="img-fluid rounded-circle"
                    src="../../public/alicv.png" alt=""></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">

                <ul class="navbar-nav">
                    <li class="nav-item">
                        <h3><a class="nav-link active" aria-current="page" href="http://localhost:5174/">Ali Chouchene</a>
                        </h3>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
</template>