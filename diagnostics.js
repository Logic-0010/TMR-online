// 系统诊断工具
console.log('=== 系统诊断开始 ===');

// 检查DOM元素获取
function checkDOMElements() {
    console.log('\n=== 检查DOM元素 ===');
    
    // 检查导航元素
    const navElements = [
        'nav-formula', 'nav-management', 'nav-indicators', 
        'nav-ingredients', 'nav-profit', 'nav-about'
    ];
    
    navElements.forEach(id => {
        const element = document.getElementById(id);
        console.log(`${id}: ${element ? '存在' : '不存在'}`);
    });
    
    // 检查页面元素
    const pageElements = [
        'page-formula', 'page-management', 'page-indicators', 
        'page-ingredients', 'page-profit', 'page-about'
    ];
    
    pageElements.forEach(id => {
        const element = document.getElementById(id);
        console.log(`${id}: ${element ? '存在' : '不存在'}`);
    });
    
    // 检查配方制作页面元素
    const formulaElements = [
        'feed-list', 'selected-feeds', 'formula-name', 'cattle-stage',
        'daily-gain', 'total-weight', 'concentrate-total', 'save-formula',
        'clear-formula'
    ];
    
    formulaElements.forEach(id => {
        const element = document.getElementById(id);
        console.log(`${id}: ${element ? '存在' : '不存在'}`);
    });
}

// 检查原料数据
function checkIngredientsData() {
    console.log('\n=== 检查原料数据 ===');
    if (typeof feedIngredients !== 'undefined') {
        console.log(`原料数量: ${feedIngredients.length}`);
        if (feedIngredients.length > 0) {
            console.log('前5种原料:', feedIngredients.slice(0, 5).map(f => f.name));
        }
    } else {
        console.log('feedIngredients 未定义');
    }
}

// 检查事件监听器
function checkEventListeners() {
    console.log('\n=== 检查事件监听器 ===');
    
    // 检查导航按钮点击事件
    const navFormula = document.getElementById('nav-formula');
    if (navFormula) {
        console.log('导航按钮存在，尝试触发点击事件...');
        // 模拟点击事件
        const event = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        });
        navFormula.dispatchEvent(event);
        console.log('导航按钮点击事件已触发');
    }
}

// 检查图表初始化
function checkCharts() {
    console.log('\n=== 检查图表初始化 ===');
    if (typeof Chart !== 'undefined') {
        console.log(`Chart.js 版本: ${Chart.version}`);
    } else {
        console.log('Chart.js 未加载');
    }
}

// 运行诊断
function runDiagnostics() {
    checkDOMElements();
    checkIngredientsData();
    checkEventListeners();
    checkCharts();
    console.log('\n=== 系统诊断完成 ===');
}

// 当页面加载完成后运行诊断
window.addEventListener('load', function() {
    setTimeout(runDiagnostics, 1000);
});
