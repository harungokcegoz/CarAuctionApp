<script>
    import HomepageHeader from "./components/Homepage/HomepageHeader.svelte";
    import Footer from "./components/Footer/Footer.svelte";
    import Inventory from "./components/Inventory/Inventory.svelte";
    import WelcomePage from "./components/WelcomePage/WelcomePage.svelte";
    import router from "page";
    import SellACar from "./components/SellACar/SellACar.svelte";
    import Register from "./components/Register/Register.svelte";
    import Login from "./components/Login/Login.svelte"
    import Homepage from "./components/Homepage/Homepage.svelte";
    import Registered from "./components/WelcomePage/Registered.svelte";
    import Profile from "./components/Profile/Profile.svelte";
  import CarRegistered from "./components/SellACar/CarRegistered.svelte";
    import Navigator from "./components/Navigator.svelte"
  import LotteryDetails from "./components/Inventory/LotteryDetails.svelte";
  import EditPage from "./components/Profile/EditPage.svelte";
  import AdminEditPage from "./components/AdminDashboard/AdminEditPage.svelte";



    let page;



    router("/", () => (page = WelcomePage));
    router("/registered", () => (page = Registered));
    router("/home", () => (page = Homepage));
    router("/register", () => (page = Register));
    router("/login", () => (page = Login));
    router("/inventory", () => (page = Inventory));
    router("/sellACar", () => (page = SellACar));
    router("/profile", () => (page = Profile));
    router("/carRegistered", () => (page = CarRegistered));
    router("/inventory/lotteries/:id", () => (page = LotteryDetails));
    router("/inventory/lotteries/admin/edit/:id", () => (page = AdminEditPage));


   
    router.start();

</script>

      

    <HomepageHeader/>
    <Navigator/>
   

<main>

    <svelte:component this={page}/>
   
</main>

    <Footer/>


<style>
</style>


