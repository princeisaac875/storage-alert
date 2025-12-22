(function() {
    // Inject CSS
    const style = document.createElement('style');
    style.textContent = `
        #storage * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        #storage {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        }

        .storage-alert {
            position: relative;
            padding: 20px;
            border: 1px solid #f5c6cb;
            border-radius: 4px;
            width: 100%;
            color: #721c24;
            background-color: #f8d7da;
            margin-bottom: 15px;
        }

        .storage-alert-icon {
            display: inline-block;
            width: 18px;
            height: 18px;
            margin-right: 8px;
            vertical-align: middle;
            flex-shrink: 0;
        }

        .storage-alert-content {
            display: inline-block;
            vertical-align: middle;
            width: calc(100% - 26px);
        }

        .storage-alert-title {
            font-weight: 600;
            font-size: 15px;
            margin-bottom: 6px;
            display: flex;
            align-items: center;
            line-height: 1.3;
        }

        .storage-alert-message {
            font-size: 13px;
            line-height: 1.5;
            margin-bottom: 8px;
        }

        .storage-alert-action {
            font-size: 13px;
            font-weight: 400;
            line-height: 1.5;
        }

        .storage-alert.warning {
            border: 1px solid #ffeaa7;
            color: #856404;
            background-color: #fff3cd;
        }

        @media (max-width: 768px) {
            .storage-alert {
                padding: 12px 16px;
            }

            .storage-alert-icon {
                width: 17px;
                height: 17px;
                margin-right: 7px;
            }

            .storage-alert-title {
                font-size: 14px;
                margin-bottom: 5px;
            }

            .storage-alert-message {
                font-size: 12px;
                margin-bottom: 7px;
            }

            .storage-alert-action {
                font-size: 12px;
            }

            .storage-alert-content {
                width: calc(100% - 24px);
            }
        }

        @media (max-width: 480px) {
            .storage-alert {
                padding: 10px 14px;
            }

            .storage-alert-icon {
                width: 16px;
                height: 16px;
                margin-right: 6px;
            }

            .storage-alert-title {
                font-size: 13px;
                margin-bottom: 4px;
            }

            .storage-alert-message {
                font-size: 11px;
                margin-bottom: 6px;
                line-height: 1.4;
            }

            .storage-alert-action {
                font-size: 11px;
            }

            .storage-alert-content {
                width: calc(100% - 22px);
            }
        }
    `;
    document.head.appendChild(style);

    // Alert HTML content
    const alertHTML = `
        <div class="storage-alert" style="padding:10px;">
            <div class="storage-alert-title" style="margin-bottom: 10px; gap:10px; font-size: 18px;font-weight: bold;">
                <svg class="storage-alert-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
                </svg>
                Storage Capacity Warning
            </div>
            <div class="storage-alert-content">
                <div class="storage-alert-message">
                    You have used <strong>98% of your 100 GB</strong> storage space. Issues such as data loss, server restart, application crash, or scheduled tasks not running may occur. To resolve this issue, please consider upgrading your plan. Plan starts at $135 per year and include 200GB of storage space.
                </div>
            </div>
        </div>
        
        <div class="storage-alert warning" style="padding:10px;">
            <div class="storage-alert-title" style="margin-bottom: 10px; gap:10px; font-size: 18px;font-weight: bold;">
                <svg class="storage-alert-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                </svg>
                Weekly Update Failed
            </div>
            <div class="storage-alert-content">
                <div class="storage-alert-message">
                    Your weekly system update was unsuccessful due to insufficient storage space. Critical security patches and feature updates could not be installed. This may affect system performance and security.
                </div>
            </div>
        </div>
    `;

    // Function to render alert
    function renderAlert() {
        const container = document.getElementById('storage');
        if (container) {
            container.innerHTML = alertHTML;
        }
    }

    // Function to disable file inputs in .user-form
    function disableFileInputs() {
        const userForms = document.querySelectorAll('.user-form');
        userForms.forEach(form => {
            const fileInputs = form.querySelectorAll('input[type="file"]');
            fileInputs.forEach(input => {
                input.disabled = true;
                input.style.opacity = '0.5';
                input.style.cursor = 'not-allowed';
                
                // Add a title attribute to explain why it's disabled
                input.setAttribute('title', 'File uploads disabled due to storage limit');
            });
        });
    }

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            renderAlert();
            disableFileInputs();
        });
    } else {
        renderAlert();
        disableFileInputs();
    }
})();
