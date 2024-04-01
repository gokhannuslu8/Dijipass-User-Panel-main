<template>
  <div class="bg-color">
    <router-view />
  </div>
  <div class="finans-bilgileri">
    <h2 class="baslik">Finans Bilgilerim</h2>
    <div class="dikdortgen">
      <div class="deger1">{{ bankaAdi }}</div>  
      <div class="deger2">
        <img src="./assets/cüzdan.png" alt="cüzdan" class="wallet">
        <span class="iban" ref="iban">{{ ibanNumarasi }}</span>
        <img src="./assets/copyicon.png" alt="kopyala" class="copy">
        <div v-if="ibanKopyalandi" class="kopyalandi-mesaji">{{ kopyalandiMesaji }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ibanKopyalandi: false,
      kopyalandiMesaji: "IBAN kopyalandı!"
    };
  },
  props: {
    bankaAdi: {
      type: String,
      default: 'ZİRAAT BANKASI' 
    },
    ibanNumarasi: {
      type: String,
      default: 'TR33 0006 1005 1978 6457 8413 26' 
    }
  },
  methods: {
    kopyalaIban() {
      const range = document.createRange();
      range.selectNode(this.$refs.iban);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      document.execCommand('copy');
      window.getSelection().removeAllRanges();
      this.ibanKopyalandi = true;   
    }
  }
};
</script>

<style lang="scss" scoped>
$backgroundColor: #f0f0f0;
.finans-bilgileri {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.deger1 {
  font-size: small;
  opacity: 0.6;
  margin-left: 50px;
  margin-right: 10px; 
}

.baslik {
  font-size: 14px;
  opacity: 0.5;
  margin-right: 260px;
}

.dikdortgen {
  position: relative; 
  width: 375px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
}

.deger2 {
  margin-top: -7px; 
  opacity: 1;
  display: flex;
  align-items: center; 
  position: relative; 
}

.wallet {
  width: 35px;
  height: 35px;
  margin-right: 5px;
  margin-top: -10px; 
}

.copy{
  width: 30px;
  height: 30px;
  margin-left: 25px;
  margin-bottom: 5px;
  cursor: pointer; 
}

.iban {
  margin-left: 9px; 
  font-size: 15px
}


@media only screen and (max-width: 600px) {
  .finans-bilgileri {
    font-size: 14px;
  }
}
</style>
