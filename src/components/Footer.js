import React, {Component} from 'react';

class Footer extends React.Component{
    render(){
        return(
            <div> 
                <footer class="mt-5">
                <div class="container">
                    <div class="divider"></div>
                    <div class="row">
                        <div class="col-md-6 copyright text-xs-center">            
                            <p>
                            <img src="assets/images/logo.png" alt="" height="30px"/>
                            <br/>
                                <br/>OWNER : 이정윤
                                <br/>ADDRESS : 04213 서울특별시 마포구 마포대로 114 (공덕동) 4층
                                <br/>BUSINESS LICENSE : 581-88-01277 [사업자정보확인]
                                <br/>ONLINE ORDER LICENSE : 2019-서울마포-1151     
                                <br/>CPO : 박소영(contact@villagebaby.kr)
                                <br/>Copyright Baby Billy. All rights reserved.</p>
                        </div>
                        {/* <div class="col-md-6">           
                            <ul class="social-network inline text-md-right text-sm-center">
                                <li class="list-inline-item"><a href="#"><i class="icon-facebook"></i></a></li>
                                <li class="list-inline-item"><a href="#"><i class="icon-twitter"></i></a></li>
                                <li class="list-inline-item"><a href="#"><i class="icon-behance"></i></a></li>
                            </ul>
                        </div> */}
                    </div>    
                </div>
            </footer>
            </div>
        )
    }
}
export default Footer