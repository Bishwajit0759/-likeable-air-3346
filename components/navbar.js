function navbar() {

    return `  <div class="hedder">
    <div class="navbar">




        <img src="https://logos-world.net/wp-content/uploads/2022/04/OLX-Symbol.png">






        <div class="contry_select" id="contry">
            <div class="select">
                <p id="text"> Select Your Country </p>
                <i class="fa-solid fa-chevron-down" id="moving"></i>
            </div>


            <ul class="option_box" id="list">
                <li class="option" onclick="myfunction('USA')">
                    <i class="fa-solid fa-location-dot"></i>
                    <p>USA</p>
                </li>
                <li class="option" onclick="myfunction('Canada')">
                    <i class="fa-solid fa-location-dot"></i>
                    <p>Canada</p>
                </li>
                <li class="option" onclick="myfunction('India')">
                    <i class="fa-solid fa-location-dot"></i>
                    <p>India</p>
                </li>
                <li class="option" onclick="myfunction('Pakistan')">
                    <i class="fa-solid fa-location-dot"></i>
                    <p>Pakistan</p>
                </li>
                <li class="option" onclick="myfunction('New York')">
                    <i class="fa-solid fa-location-dot"></i>
                    <p>New York</p>
                </li>
            </ul>
        </div>





        <div class="search_box">
            <input type="text" class="searchclass" id="searchid" placeholder="Find Cars, mobile phone and More....">
            <p> <i class="fa-solid fa-magnifying-glass"></i> </p>
        </div>




        <div class="language">
            <p id="eng_tag"> English </p>

            <ul class="hin_eng">
                <li onclick="languageolx('English')"> English </li>
                <li onclick="languageolx('हिन्दी')">हिन्दी</li>
            </ul>

        </div>




        <div class="messeage">
            <a href="olx_chatbox_.html"><i class="fa-regular fa-comment"></i></a>
        </div>




        <div class="messeage">
            <i class="fa-regular fa-bell"></i>
        </div>





        <div class="your_logo">
            <div class="girl_img" id="girl_img_id">
                <P>&nbsp&nbsp&nbspLOGIN</P>
            </div>

            <div class="dropdwon" id="gropdwonid">
                <div class="nameandimg">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAB/CAMAAADxY+0hAAAAw1BMVEX////mfiK9w8fTVACVpabQQwDVWAruw7R+i4y5wMTldgDAxsrSUQDFy87ldADVUADlehTkeR/19vbZ3d/O09bn6evt7/DRSACRqKuMm5yFk5TfbxnZYg/g4+Wmr7KTn6FzgoP56uLlnH3JXzLloIXUVxizi3jxw6edoJz65dfqkk/MakHwto7CdlP88uy6gGaomIyvkYD328vrml71zbLtpXLkbADuqn/rnGfdg2fhlH7rtZ/ONgDdg1/XZjjz1MvnhTaiTqpRAAAEM0lEQVRoge2ZaXeqMBCGy6JXBcU9KAqtS10q1Np9u+3//1U3YXEFk2BGzz2H90NPDxWfN5OZIUyvrjJlypQpE6/q9Xar1WrX65dg95tluRhILjf75/XQL2PqtorFcv9s9MYePLLQOAu9pcXRfQdyCx7fTKL7DprA9Hri4kMDGmgito7TfQeAe8CAhzTQZsFjA20YfJ0NjwWTA2VWvFyGwDeYly9DdCLGzQ8NiE+BMhdfeB/iWj5AAI623TMEgA+PDYjFcyR/yBd7HGCv/UhCewB769sEQGQT5Mx+ny+yAri3X3APbHLjZVlkBfKnn9gEzPgZ/5L8S9ffpfsP08F/jy/yNeDSz59LP39TnD/EHsG5N0Bs+Pk3QPQr0KXP35wBEP8G2ObiA7yCc7yBwIyBNGa+BoFnr0HRtReJ8SkANwDqM82fAAexDAYg8aQKKfNHiMrbVp0yf4WfwzfkpELUZPgJeKvodG0tzoGm2V0HcvpKgu9cF7C6dnHPgqYV7S7507UDtgU3g6Gqqj6lUOjYRQwNJRftTnC5iz8xHNwA0L3RGKFbU1U7oYNCt+M4tm07ztYVVTVvERqPPNH4yRgpijKe4vVtHOyK0FV1OsafQ+OJUPpsXlGIjDtTVWMtBHC8/DvD/2RlPhOHX1SqUi0w4IYGiIdON1Cns75mugG+JlUrC0F0b16SsHq6b+B+Y+BQ5r2P13vkhtJcSBaspKrkK6/QDIR4JR/cUJVWp+OfSiE+3AGyBfEOzCj4OPqhgdLTqfhFRVqrpgcGxss4A+ZyHOD12uaWU5NgUZK2FEZAN9zpXgxMc+oa+u7qfZVOMrC9et9APgqBu1TXFvAvSzdafL62e8spEZjs4TcGFMMYug84CljTB3dohDt/gMcGUreiQ/y6DP1dMBAyFPLDWF/rxdyR1sCqFPNlWyE4UMzigxxIVYZeNfbLsKxYB3reSrqhmqYRPSbysYOevmNBx5FPpGP+Iz8+dvM3qlm9vB4p37PiIx+JPwVmR1a/MVGzLKt2HB1GgPdpOGfhs6s658NP4nM/vUp8OyAajw3w4BcAfI4+7InHYwPsTQBg+TwB8H4B8JL0yxqAp+OtJ60qrIchwbUfibUHMLW+VAbYmiBI9hExZiAQnYgp/FDLxwFg2QDhrX+Lz/IQeIZKP5yAzwx8MDoRHe+9AOJf6C1wBdP8AlXoJ2Gw6idi6ACvcOmHE/CVyn8D5b9R+YDlx1SAC1A+ff8vnX8j0PWPqPx30P7zTufrgHydzv9AcTMEMeqhDyr/Mxc7xBCC13OfVL73lTjHOE1kbvLFcAT/Nsgch/JCzw23yNzI+Kbjr2Zk0K7rSl6kFH9egpgOwKNcwnzpVOXo1e9rAGMgN2DD4xpAKGnGllY6QvTcX8sb/EU5kUJ/B3wzOG/280ecfmbC/yGVKVOmTP+5/gEAem0uWPMQ/gAAAABJRU5ErkJggg==">
                    <p> Deepak Soni </p>
                </div>

                <ul>
                    <li>
                        <i class="fa-regular fa-user"></i>
                        <p>My Account</p>
                    </li>
                    <li>
                        <i class="fa-solid fa-box"></i>
                        <p>My Orders</p>
                    </li>
                    <hr>
                    <li>
                        <i class="fa-regular fa-circle-question"></i>
                        <p>Help</p>
                    </li>
                    <li>
                        <i class="fa-solid fa-gear"></i>
                        <p>Setting</p>
                    </li>
                    <hr>

                    <li>
                        <i class="fa-solid fa-right-from-bracket"></i>
                        <p>Log Out</p>
                    </li>

                </ul>
            </div>
        </div>





        <div class="selling_page">
            <button> <i class="fa-solid fa-plus"></i>
                <p>SELL</p>
            </button>
        </div>


    </div>
</div>

<div id="catgory" style="display: flex;justify-content:space-evenly;border: 1px rgb(139 154 153);">
    <a href="frfr"> ALL CATEGORIES</a>
    <a href>Cars
    </a>
    <a href>Motorcycles
    </a>
    <a href>Mobile Phones</a>
    <a href>For Sale: Houses & Apartments</a>
    <a href>Scooters</a>
    <a href>
        Commercial & Other Vehicles</a>
    <a href>For Rent: Houses & Apartments</a>

</div>
`;



}

export default navbar;