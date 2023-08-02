import service from '@/utils/request'

// @Tags Package2
// @Summary 创建Package2
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Package2 true "创建Package2"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /package2/createPackage2 [post]
export const createPackage2 = (data) => {
  return service({
    url: '/package2/createPackage2',
    method: 'post',
    data
  })
}

// @Tags Package2
// @Summary 删除Package2
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Package2 true "删除Package2"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /package2/deletePackage2 [delete]
export const deletePackage2 = (data) => {
  return service({
    url: '/package2/deletePackage2',
    method: 'delete',
    data
  })
}

// @Tags Package2
// @Summary 删除Package2
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除Package2"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /package2/deletePackage2 [delete]
export const deletePackage2ByIds = (data) => {
  return service({
    url: '/package2/deletePackage2ByIds',
    method: 'delete',
    data
  })
}

// @Tags Package2
// @Summary 更新Package2
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Package2 true "更新Package2"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /package2/updatePackage2 [put]
export const updatePackage2 = (data) => {
  return service({
    url: '/package2/updatePackage2',
    method: 'put',
    data
  })
}

// @Tags Package2
// @Summary 用id查询Package2
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query model.Package2 true "用id查询Package2"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /package2/findPackage2 [get]
export const findPackage2 = (params) => {
  return service({
    url: '/package2/findPackage2',
    method: 'get',
    params
  })
}

// @Tags Package2
// @Summary 分页获取Package2列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query request.PageInfo true "分页获取Package2列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /package2/getPackage2List [get]
export const getPackage2List = (params) => {
  return service({
    url: '/package2/getPackage2List',
    method: 'get',
    params
  })
}
