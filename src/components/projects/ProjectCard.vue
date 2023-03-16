<script>
export default {
    name: 'ProjectCard',
    props: { project: Object },
    computed: {
        projectDate() {
            const date = new Date(this.project.updated_at)
            let day = date.getDay();
            let month = date.getMonth();
            const year = date.getFullYear();


            if (day < 10) day = '0' + day;
            if (month < 10) month = '0' + month;


            return `${day}/${month}/${year}`;
        }
    }
}

</script>

<template>
    <div class="card">
        <img :src="project.image" class="card-img-top" :alt="project.name">
        <div class="card-body">
            <h5 class="card-title">{{ project.name }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <div class="d-flex justify-content-end">
                <router-link :to="{ name: 'project-detail', params: { id: project.id } }" class="btn btn-secondary">More
                    Info</router-link>
            </div>
        </div>
        <div class="card-footer">
            <time><small>published: </small>{{ projectDate }}</time>
        </div>
    </div>
</template>