sap.ui.controller("ZFI_0262_DEF_REV.zfi_0262_def_renu.ext.controller.ListReportExt", {

	onBeforeRebindTableExtension:function(oEvent){
		var oComponent = this.getOwnerComponent();
		this._oResourceBundle = oComponent.getModel("i18n").getResourceBundle();
		var idListReportFilter = "ZFI_0262_DEF_REV.zfi_0262_def_renu::sap.suite.ui.generic.template.ListReport.view.ListReport::ZFI_COV_DEF_REVENUE--listReportFilter";
		var filterData=this.byId(idListReportFilter).getFilterData();
		
		var filterDataKeys = Object.keys(filterData);
		var isOneSel = -1;
		isOneSel =  filterDataKeys.findIndex(this._checkRequired);
		if(isOneSel === -1){
			sap.m.MessageBox.error(this._oResourceBundle.getText("XMSG.RequiredFields"));
			oEvent.getParameter("bindingParams").preventTableBind = true;
		}else{
			oEvent.getParameter("bindingParams").preventTableBind = false;
		}
	},
	_checkRequired: function(key) {
		var oneRequiredKeys = ["Pspid", "CompanyCode", "ProjectAccountant"];
		return oneRequiredKeys.includes(key);
}
});