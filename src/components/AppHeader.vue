<script>
export default {
    
}
</script>
<template lang="">
    <header>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="nav">
                        <div class="title">
                            <h1>Boolflix</h1>
                        </div>
                        <div class="search-bar">
                            <input type="text" class="form-control" placeholder="Film, Serie Tv...">
                            <button class="btn btn-primary">Cerca</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<style lang="scss" scoped>
    @use './styles/generals.scss';
    @use './styles/partials/variables' as*;

    .nav{
        display: flex;
        justify-content: space-between;
        padding: 10px 0;

        .title{

            h1{
                color: $red_flix;
                text-shadow: 2px 2px 5px white;
            }
        }

        .search-bar{
            display: flex;
            justify-content: end;
            .form-control{
                width: 50%;

                &::placeholder{
                    color: lightgrey;
                }
            }
        }
    }

</style>