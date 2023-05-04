import service from '@/utils/request'

// @Tags TestStruct
// @Summary 创建TestStruct
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.TestStruct true "创建TestStruct"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /testS/createTestStruct [post]
export const createTestStruct = (data) => {
  return service({
    url: '/testS/createTestStruct',
    method: 'post',
    data
  })
}

// @Tags TestStruct
// @Summary 删除TestStruct
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.TestStruct true "删除TestStruct"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /testS/deleteTestStruct [delete]
export const deleteTestStruct = (data) => {
  return service({
    url: '/testS/deleteTestStruct',
    method: 'delete',
    data
  })
}

// @Tags TestStruct
// @Summary 删除TestStruct
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除TestStruct"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /testS/deleteTestStruct [delete]
export const deleteTestStructByIds = (data) => {
  return service({
    url: '/testS/deleteTestStructByIds',
    method: 'delete',
    data
  })
}

// @Tags TestStruct
// @Summary 更新TestStruct
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.TestStruct true "更新TestStruct"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /testS/updateTestStruct [put]
export const updateTestStruct = (data) => {
  return service({
    url: '/testS/updateTestStruct',
    method: 'put',
    data
  })
}

// @Tags TestStruct
// @Summary 用id查询TestStruct
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query model.TestStruct true "用id查询TestStruct"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /testS/findTestStruct [get]
export const findTestStruct = (params) => {
  return service({
    url: '/testS/findTestStruct',
    method: 'get',
    params
  })
}

// @Tags TestStruct
// @Summary 分页获取TestStruct列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query request.PageInfo true "分页获取TestStruct列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /testS/getTestStructList [get]
export const getTestStructList = (params) => {
  return service({
    url: '/testS/getTestStructList',
    method: 'get',
    params
  })
}
