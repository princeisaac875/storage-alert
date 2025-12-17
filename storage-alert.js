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
            padding: 14px 18px;
            border: 1px solid #ffeaa7;
            border-radius: 4px;
            width: 100%;
            color: #856404;
            background-color: #fff3cd;
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

        .storage-alert-action a {
            color: #856404;
            text-decoration: underline;
            cursor: pointer;
            font-weight: 500;
        }

        .storage-alert-action a:hover {
            color: #533f03;
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
        <div class="storage-alert">
            <div class="storage-alert-title">
                <svg class="storage-alert-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                </svg>
                Storage Capacity Warning
            </div>
            <div class="storage-alert-content">
                <div class="storage-alert-message">
                    You have used <strong>95% of your 100 GB</strong> storage space.<br>
                    Issues such as data loss, server restart, application crash, or scheduled tasks not running may occur.
                </div>
                <div class="storage-alert-action">
                    To resolve this issue, please consider <a href="#upgrade">upgrading your plan</a>. Starting at $135 per year, you'll receive 200 GB of storage space.
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

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderAlert);
    } else {
        renderAlert();
    }
})();
