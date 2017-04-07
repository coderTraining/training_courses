<?php
require_once('../vendor/autoload.php');

$smarty = new Smarty();
$smarty->setTemplateDir('../templates');
$smarty->setCompileDir('../templates_c');

$courseId = $_REQUEST['courseId'] ?? 'index';

$smarty->display($courseId . '.html');
