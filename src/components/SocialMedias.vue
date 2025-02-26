<script>
export default {
    data() {
        return {
            socialMedias: [
                {
                    name: "Instagram",
                    value: "https://www.instagram.com/gokhannuslu8",
                    icon: require("@/assets/instagram.webp")
                },
                {
                    name: "Discord",
                    value: "",
                    icon: require("@/assets/discord.webp")
                },
                {
                    name: "Youtube",
                    value: "",
                    icon: require("@/assets/youtube.webp")
                },
                {
                    name: "Whatsapp",
                    value: "tel:+90434999875",
                    icon: require("@/assets/whatsapp.webp")
                },
            ],
        }
    },
}
</script>

<template>
    <div class="field">
        <div class="socialMedia" v-for="socialMedia in socialMedias" :key="socialMedia.name">
            <img :src="socialMedia.icon" />

            <p class="mt-1">{{ socialMedia.name }}</p>
        </div>
    </div>
</template>

<style lang="scss">
.field {
    border: solid 1px lightgrey;
    border-radius: 5px;
    padding: 25px;
    min-height: 80px;
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    min-width: 260px;
    max-width: 370px;

    .socialMedia {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 90px;
        min-width: 70px;
        width: 100%;
        margin-bottom: 15px;

        img {
            width: 45px;
            height: 45px;
            object-fit: cover;
            border-radius: 5px;
        }

        p {
            font-size: 14px;
            color: grey;
        }
    }
}
</style>