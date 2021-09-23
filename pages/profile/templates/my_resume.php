<div class="row m-auto"
<?php  
    echo 'id="portfolio_'.$item["hash_id"].'"';
?>
>
  <div class="card-footer bg-white px-0 profile-card ">

     <div class="row m-auto">
         <div class="col-md-6">
            <a href="#" class="btn text-decoration-none text-dark" 
                <?php
                    echo " onclick=\"redirect_to('/pages/app/view/?portfolio=".$item["hash_id"]."')\"";
                ?>
            >
                <?php 
                    echo $item["name"]
                ?>
            </a>
         </div>
         <div class="col-md-6 text-end">
            <ul class="list-inline mb-0" style="cursor:pointer">
                <li class="list-inline-item">
            <a href="#" class="btn btn-outlined btn-black text-muted bg-transparent"
                <?php  
                  echo " onclick=\"redirect_to('/pages/app/form/?portfolio=".$item["hash_id"]."')\"";
                ?> 
            >
                <img src="https://img.icons8.com/ios/50/000000/settings.png" width="19" height="19"> 
                <small>ИЗМЕНИТЬ</small>
            </a>
            </li><li class="list-inline-item">
            <i class="mdi mdi-settings-outline"></i> 
            <span class="btn btn-outlined btn-black text-muted"
                <?php  
                  echo " onclick=\"copy_link('/pages/app/view/?portfolio=".$item["hash_id"]."')\"";
                ?> 
            >
                <img src="https://img.icons8.com/metro/26/000000/link.png" width="17" height="17" id="plus">
                <small>СКОПИРОВАТЬ ССЫЛКУ</small>
            </span>
            <span class="vl ml-3"></span> 
            </li>
                <li class="list-inline-item" title="Дублировать портфолио"
                    <?php
                        echo " onclick=\"duplicate_portfolio('".$item['hash_id']."')\"";
                    ?>
                > 
                    <img src="../../imgs/plus.svg" width="30" height="30 " class="more">
                </li>
                <li class="list-inline-item" style="cursor:pointer" title="Удалить портфолио" 
                    <?php
                        echo " onclick=\"delete_portfolio('".$item['hash_id']."')\"";
                    ?>
                > 
                    <img src="../../imgs/minus.svg" width="30" height="30 " class="more"> 
                </li>
             </ul>
         </div>
         
     </div>
  </div>
</div>