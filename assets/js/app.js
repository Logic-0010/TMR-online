// 应用核心功能

// 初始化应用
function initApp() {
    try {
        // 从本地存储加载原料数据
        loadIngredientsFromLocalStorage();

        // 初始化原料列表
        initFeedList();

        // 初始化移动端菜单
        initMobileMenu();

        // 初始化事件监听器
        initEventListeners();

        // 初始化图表交互修复
        initChartInteractions();

        // 从本地存储加载数据（添加错误处理）
        try {
            loadSavedFormulas();
            loadCurrentFormula();
        } catch (error) {
            console.error('从本地存储加载数据失败:', error);
            // 重置数据以确保应用能正常启动
            resetAppData();
            showToast('加载数据失败，已重置为默认状态', 'warning');
        }

        // 默认显示配方制作页面
        switchPage('formula');

        // 更新精料配方选择器
        updateConcentrateSelector();

        // 初始化自动备份
        initAutoBackup();

        // 初始化存储监控
        initStorageMonitoring();

        // 执行存储健康检查
        const healthStatus = storageHealthCheck();
        if (healthStatus.warnings.length > 0) {
            showToast(`存储健康检查发现 ${healthStatus.warnings.length} 个问题，请查看控制台详细信息`, healthStatus.warnings.length >= 3 ? 'danger' : 'warning');
        }

        // 显示存储空间使用情况
        showStorageUsage();

        // 初始化图表
        console.log('Initializing charts...');
        updateNutritionCharts();
    } catch (error) {
        console.error('初始化应用失败:', error);
        showToast('应用初始化失败，请刷新页面重试', 'error');
    }
}

// 页面加载完成后初始化应用
document.addEventListener('DOMContentLoaded', function() {
    // 等待Chart.js加载完成后再初始化
    function initializeWhenChartReady() {
        if (typeof Chart !== 'undefined') {
            console.log('Chart.js is ready, initializing app...');
            initApp();
            // 确保配方页面可见后再初始化图表
            setTimeout(function() {
                console.log('Initializing charts after app init...');
                updateNutritionCharts();
            }, 500);
        } else {
            console.log('Waiting for Chart.js to load...');
            setTimeout(initializeWhenChartReady, 100);
        }
    }

    initializeWhenChartReady();
});