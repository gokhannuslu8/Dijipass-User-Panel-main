<script>
export default {
    data() {
        return {
            website: "www.linkedin.com/in/gokhannuslu/?lipi=urn%3Ali%3Apage%3Ad_flagship3_people%3BomkVFFD2TcCNMNvn%2FDccnA%3D%3D",
            websiteName: ""
        }
    },
    mounted() {
        this.getWebsiteName(this.website);
    },
    methods: {
        getWebsiteName(url) {
            let domain = url.replace(/(https?:\/\/)?(www\.)?/, '');
            domain = domain.split('/')[0];
            this.websiteName = domain;
        }
    }
}
</script>

<template>
    <div class="profile">
        <img src="@/assets/profilePhoto.jpg" class="profilePhoto" />

        <p class="text-white fw-semibold fs-5 m-0 mt-3">Gökhan Uslu</p>
        <p class="text-white fw-light title mt-2">Software Developer</p>

        <div class="buttons">
            <button><i class="fa-solid fa-phone" /></button>
            <button><i class="fa-regular fa-comment-dots" /></button>
            <button><i class="fa-regular fa-envelope" /></button>
            <button class="longBtn"><i class="fa-solid fa-location-dot me-2" /> İzmir</button>
        </div>
    </div>

    <button class="addToContacts"><i class="fa-solid fa-user-plus me-2" /> Rehbere Ekle</button>

    <a :href=website class="website mb-3">
        <div class="websiteCard mt-4">
            <div>
                <img :src="'https://www.google.com/s2/favicons?sz=64&domain_url=' + website" />
            </div>

            <div class="websiteContent ms-2">
                <p class="title text-secondary">LinkedIn</p>
                <p>{{ websiteName }}</p>
            </div>
        </div>
    </a>
</template>

<style lang="scss">
.profile {
    background-color: $profileBackgroundColor;
    height: 350px;
    border-radius: 0 0 26px 26px;
    box-shadow: 0 5px 7px 0 rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .profilePhoto {
        width: 130px;
        height: 130px;
        object-fit: cover;
        border-radius: 50%;
    }

    .title {
        font-size: 15px;
    }

    .buttons {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        min-width: 210px;
        align-items: center;

        button {
            background-color: transparent;
            color: white;
            border: solid 1px white;
            border-radius: 8px;
            height: 34px;
            width: 34px;
            display: flex;
            justify-content: center;
            align-items: center;

            i {
                font-size: 15px;
            }
        }

        .longBtn {
            width: 80px;
            font-size: 14px;
        }
    }
}

.addToContacts {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: -21px;
    max-width: 330px;
    width: 100%;
    height: 40px;
    background-color: $primaryColor;
    color: white;
    border: none;
    border-radius: 100px;
}

.website {
    display: block;
    min-width: 260px;
    max-width: 370px;
    text-decoration: none;
    display: flex;
    margin: auto;

    .websiteCard {
        width: 100%;
        display: flex;
        align-items: center;
        background-color: $secondaryColor;
        height: 80px;
        border: solid 1px lightgrey;
        border-radius: 5px;
        padding: 8px;

        img {
            width: 64px;
            height: 64px;
            border-radius: 5px;
        }

        .websiteContent {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 45px;

            .title {
                font-size: 14px;
            }

            p {
                margin: 0;
                color: black;
            }
        }
    }
}
</style>