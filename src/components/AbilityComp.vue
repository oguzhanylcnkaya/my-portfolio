<template>
  <div id="ability">
        <div class="container-fluid">
            <div class="row" style="margin-bottom: 1rem;">
                <div class="col-md-12 col-sm-12">
                    <div class="aboutme">
                        <h1>BENİM HAKKIMDA</h1>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="aboutme">
                        <h6 style="margin-bottom: 2rem;">Ben KİMİM?</h6>
                        <p>Size kısaca kendimi takdim edeyim. Adım Oğuzhan, 30 Temmuz 1997 Denizli
                            doğumluyum. Sakarya Üniversitesi
                            Yönetim Bilişim Sistemleri bölümünden 2020 yılında mezun oldum. Kariyerime şuan da Software Developer olarak devam ediyorum.
                            Yazılım alanında ilk deneyimim olan staj süresince Backend dediğimiz kısımda görev aldım.
                            Mezun olduktan sonra ise ilk iş deneyimimi Frontend Developer olarak gerçekleştirdim.
                            Şuan da her iki alanda da (ağırlıklı olarak Frontend Developer) çalışıyorum.
                            Hedefim; mobil alanına girip yeni bilgiler edinmek, bildiğim teknolojiler de kendimi geliştirmek ve eğitim anlamında Master yapmak diyebilirim. 
                        </p>
                    </div>
                </div>
                <div class="col-lg-5 col-md-6 col-sm-12" style="margin: 0 auto;">
                    <div class="aboutme">
                        <h6 style="margin-bottom: 2rem;">Yeteneklerim</h6>
                    </div>

                    <div v-for="ability in abilities" :key="ability" class="progress">
                        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                            :aria-valuenow="ability.percent" aria-valuemin="0" aria-valuemax="100" :style="{width: ability.percent +'%'}">
                            <div class="skillbar">
                                <span class="skill-name">{{ ability.name }}</span>
                                <span class="skill-percent">{{ability.percent}}%</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- <div class="progress">
                        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                            aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style="width: 95%">
                            <div class="skillbar">
                                <span class="skill-name">Html</span>
                                <span class="skill-percent">95%</span>
                            </div>
                        </div>
                    </div>
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                            aria-valuenow="87" aria-valuemin="0" aria-valuemax="100" style="width: 87%">
                            <div class="skillbar">
                                <span class="skill-name">Css</span>
                                <span class="skill-percent">87%</span>
                            </div>
                        </div>
                    </div>
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                            aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%">
                            <div class="skillbar">
                                <span class="skill-name">Javascript</span>
                                <span class="skill-percent">75%</span>
                            </div>
                        </div>
                    </div>
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                            aria-valuenow="62" aria-valuemin="0" aria-valuemax="100" style="width: 62%">
                            <div class="skillbar">
                                <span class="skill-name">Vue.JS</span>
                                <span class="skill-percent">62%</span>
                            </div>
                        </div>
                    </div>

                    <div class="progress">
                        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                            aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style="width: 45%">
                            <div class="skillbar">
                                <span class="skill-name">Angular</span>
                                <span class="skill-percent">45%</span>
                            </div>
                        </div>
                    </div>

                    <div class="progress">
                        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                            aria-valuenow="73" aria-valuemin="0" aria-valuemax="100" style="width: 73%">
                            <div class="skillbar">
                                <span class="skill-name">C#</span>
                                <span class="skill-percent">73%</span>
                            </div>
                        </div>
                    </div>
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                            aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style="width: 45%">
                            <div class="skillbar">
                                <span class="skill-name">Asp.Net MVC</span>
                                <span class="skill-percent">45%</span>
                            </div>
                        </div>
                    </div>
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                            aria-valuenow="35" aria-valuemin="0" aria-valuemax="100" style="width: 35%">
                            <div class="skillbar">
                                <span class="skill-name">.Net Core</span>
                                <span class="skill-percent">35%</span>
                            </div>
                        </div>
                    </div>
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                            aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%">
                            <div class="skillbar">
                                <span class="skill-name">Git</span>
                                <span class="skill-percent">80%</span>
                            </div>
                        </div>
                    </div>
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                            aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style="width: 65%">
                            <div class="skillbar">
                                <span class="skill-name">MSSQL</span>
                                <span class="skill-percent">65%</span>
                            </div>
                        </div>
                    </div>
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                            aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%">
                            <div class="skillbar">
                                <span class="skill-name">Wordpress</span>
                                <span class="skill-percent">50%</span>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed : {
        ...mapGetters({
            abilities : "getAbility"
        })
    }
}
</script>

<style>

</style>